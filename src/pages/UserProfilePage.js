import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import app from '../components/firebase';
import { 
  getUserFavoriteNades, 
  removeNadeFromFavorites,
  getUserVideoViewStats
} from '../services/firebaseService';
import { maps as localNadesData } from '../data/nades';
import '../styles/UserProfilePage.css';
import NadeDetailsModal from '../components/NadeDetailsModal';

const auth = getAuth(app);
const db = getFirestore(app);

function UserProfilePage() {
  const [userData, setUserData] = useState(null);
  const [favoriteNades, setFavoriteNades] = useState([]);
  const [videoViewStats, setVideoViewStats] = useState({});
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const [showNadeModal, setShowNadeModal] = useState(false);
  const [selectedNadeForModal, setSelectedNadeForModal] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        await Promise.all([
          fetchUserProfileData(user.uid),
          fetchTestResults(user.uid)
        ]);
      } else {
        navigate('/login');
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchTestResults = async (userId) => {
    try {
      const testResultsDoc = await getDoc(doc(db, "testResults", userId));
      if (testResultsDoc.exists()) {
        setTestResults(testResultsDoc.data());
      }
    } catch (err) {
      console.error("Error loading test results:", err);
    }
  };

  const fetchUserProfileData = async (userId) => {
    setLoading(true);
    setError('');
    try {
      const userDocRef = doc(db, "users", userId);
      const docSnap = await getDoc(userDocRef);

      let profileData;
      if (docSnap.exists()) {
        profileData = docSnap.data();
        setUserData(profileData);

        if (profileData.favorites && profileData.favorites.length > 0) {
            const detailedFavorites = profileData.favorites.map(fav => {
                const mapData = localNadesData.find(m => m.id === fav.mapId);
                const nadeData = mapData?.spots.flatMap(s => s.nades).find(n => n.id === fav.nadeId);
                return {
                    ...fav,
                    title: nadeData?.title || 'Unknown Nade',
                    mapName: mapData?.name || 'Unknown Map',
                };
            }).filter(fav => fav.title !== 'Unknown Nade');
            setFavoriteNades(detailedFavorites);
        } else {
            setFavoriteNades([]);
        }

        setVideoViewStats(profileData.videoViews || {});

      } else {
        console.warn("User document not found in Firestore, using Auth data.");
        const authUser = auth.currentUser;
        if (authUser) {
            profileData = {
                email: authUser.email,
                displayName: authUser.displayName || authUser.email.split('@')[0],
                photoURL: authUser.photoURL,
                createdAt: authUser.metadata.creationTime 
                             ? new Date(authUser.metadata.creationTime).toISOString() 
                             : 'N/A',
                favorites: [],
                videoViews: {}
            };
            setUserData(profileData);
            setFavoriteNades([]);
            setVideoViewStats({});
        } else {
            setError("Failed to get user data.");
        }
      }
    } catch (err) {
      console.error("Error loading profile data:", err);
      setError("Failed to load profile data. Try refreshing the page.");
      if (!userData && auth.currentUser) {
        const authUser = auth.currentUser;
        setUserData({
            email: authUser.email,
            displayName: authUser.displayName || authUser.email.split('@')[0],
            photoURL: authUser.photoURL,
            createdAt: authUser.metadata.creationTime ? new Date(authUser.metadata.creationTime).toISOString() : 'N/A',
            favorites: [],
            videoViews: {}
        });
        setFavoriteNades([]);
        setVideoViewStats({});
      }
    }
    setLoading(false);
  };

  const handleRemoveFromFavorites = async (mapId, nadeId) => {
    if (!currentUser) return;
    const result = await removeNadeFromFavorites(currentUser.uid, mapId, nadeId);
    if (result.success) {
      setFavoriteNades(prevNades => prevNades.filter(n => !(n.mapId === mapId && n.nadeId === nadeId)));
    } else {
      console.error("Error removing from favorites:", result.error);
      alert("Failed to remove nade from favorites.");
    }
  };

  const handleOpenNadeModal = (mapId, nadeId) => {
    setSelectedNadeForModal({ mapId, nadeId });
    setShowNadeModal(true);
  };

  const handleCloseNadeModal = () => {
    setShowNadeModal(false);
    setSelectedNadeForModal(null);
  };

  if (loading) {
    return <div className="loading-container">Loading profile...</div>;
  }

  if (error && !userData) {
    return <div className="error-container">{error}</div>;
  }
  
  if (!userData) {
    return <div className="loading-container">User data not found. Redirecting...</div>;
  }

  const getTestCategoryName = (categoryId) => {
    const categories = {
      'peaks': 'Peaks & Angles',
      'movement': 'Movement',
      'sounds': 'Sound System',
      'utility': 'Utility Usage'
    };
    return categories[categoryId] || categoryId;
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'N/A') return 'Unknown';
    try {
      if (typeof dateString === 'object' && dateString.seconds) {
        return new Date(dateString.seconds * 1000).toLocaleDateString();
      }
      return new Date(dateString).toLocaleDateString();
    } catch (e) {
      return 'Unknown date';
    }
  };

  const getNadeTitleForViewStat = (viewKey) => {
    const [mapId, nadeId] = viewKey.split('_');
    const mapData = localNadesData.find(m => m.id === mapId);
    const nadeData = mapData?.spots.flatMap(s => s.nades).find(n => n.id === nadeId);
    return nadeData ? `${nadeData.title} (Map: ${mapData.name})` : `Unknown nade (${viewKey})`;
  };

  const totalViews = Object.values(videoViewStats).reduce((sum, count) => sum + count, 0);

  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <div className="profile-header">
          {userData.photoURL && (
            <img src={userData.photoURL} alt={userData.displayName || 'Avatar'} className="profile-avatar" />
          )}
          <div className="profile-summary">
            <h1>{userData.displayName || 'Profile'}</h1>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Registration Date:</strong> {formatDate(userData.createdAt)}</p>
          </div>
        </div>
        
        {error && <p className="error-message full-width-error">{error}</p>}

        <div className="profile-section test-results-section">
          <h2>Test Results</h2>
          {testResults ? (
            <div className="test-results-grid">
              {Object.entries(testResults).map(([categoryId, result]) => (
                <div key={categoryId} className="test-result-card">
                  <h3>{getTestCategoryName(categoryId)}</h3>
                  <div className="test-stats">
                    <p>
                      <strong>Best Score:</strong> {result.bestScore}%
                    </p>
                    <p>
                      <strong>Last Score:</strong> {result.lastScore}%
                    </p>
                    <p>
                      <strong>Attempts:</strong> {result.attempts}
                    </p>
                    <p>
                      <strong>Last Attempt:</strong> {formatDate(result.lastAttempt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">You haven't taken any tests yet. <Link to="/tests">Try now</Link></p>
          )}
        </div>

        <div className="profile-section favorites-section">
          <h2>Favorite Nades ({favoriteNades.length})</h2>
          {favoriteNades.length > 0 ? (
            <ul className="favorites-list">
              {favoriteNades.map(nade => (
                <li key={`${nade.mapId}-${nade.nadeId}`} className="favorite-item">
                  <div 
                    className="favorite-link" 
                    onClick={() => handleOpenNadeModal(nade.mapId, nade.nadeId)}
                    style={{cursor: 'pointer'}}
                  >
                    <span className="favorite-nade-title">{nade.title}</span>
                    <span className="favorite-map-name">(Map: {nade.mapName})</span>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromFavorites(nade.mapId, nade.nadeId)}
                    className="remove-favorite-button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-favorites">You don't have any favorite nades yet</p>
          )}
        </div>

        <div className="profile-section video-stats-section">
          <h2>Video Views Statistics (Total: {totalViews})</h2>
          {Object.keys(videoViewStats).length > 0 ? (
            <ul className="video-stats-list">
              {Object.entries(videoViewStats)
                .sort(([, countA], [, countB]) => countB - countA)
                .map(([nadeKey, count]) => (
                <li key={nadeKey} className="video-stat-item">
                  <span className="video-stat-title">{getNadeTitleForViewStat(nadeKey)}</span>
                  <span className="video-stat-count">Views: {count}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't watched any tutorial videos yet.</p>
          )}
        </div>

      </div>
      {showNadeModal && selectedNadeForModal && (
        <NadeDetailsModal 
          mapId={selectedNadeForModal.mapId}
          nadeId={selectedNadeForModal.nadeId}
          currentUser={currentUser}
          onClose={handleCloseNadeModal}
        />
      )}
    </div>
  );
}

export default UserProfilePage; 