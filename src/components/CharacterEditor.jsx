import { useState } from 'react';
import './CharacterEditor.css';

const CharacterEditor = () => {
  const [selectedSkin, setSelectedSkin] = useState('peach');
  const [selectedFace, setSelectedFace] = useState('1');
  const [selectedHat, setSelectedHat] = useState('1');

  const skins = ['black', 'brown', 'green', 'peach', 'white'];
  const faces = ['1', '2', '3', '4', '5'];
  const hats = ['1', '2', '3', '4', '5'];

  const getSkinPath = (skin) => {
    const ext = (skin === 'green' || skin === 'white') ? 'png' : 'webp';
    return `/look/look_skin/Skin_${skin}.${ext}`;
  };

  const getFacePath = (face) => `/look/look_face/Face_${face}.webp`;
  const getHatPath = (hat) => `/look/look_hat/Hat_${hat}.webp`;

  return (
    <div className="character-editor">
      <div className="preview">
        <div className="character">
          <img src={getSkinPath(selectedSkin)} alt="skin" />
          <img src={getFacePath(selectedFace)} alt="face" />
          <img src={getHatPath(selectedHat)} alt="hat" />
        </div>
      </div>
      <div className="selections">
        <label>
          Skin:
          <select value={selectedSkin} onChange={(e) => setSelectedSkin(e.target.value)}>
            {skins.map(skin => <option key={skin} value={skin}>{skin.charAt(0).toUpperCase() + skin.slice(1)}</option>)}
          </select>
        </label>
        <label>
          Face:
          <select value={selectedFace} onChange={(e) => setSelectedFace(e.target.value)}>
            {faces.map(face => <option key={face} value={face}>Face {face}</option>)}
          </select>
        </label>
        <label>
          Hat:
          <select value={selectedHat} onChange={(e) => setSelectedHat(e.target.value)}>
            {hats.map(hat => <option key={hat} value={hat}>Hat {hat}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
};

export default CharacterEditor;