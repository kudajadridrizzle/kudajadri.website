import React, { useState } from 'react';
import { wayanadAttractionImages, updateAttractionImage, AttractionImage } from '../utils/attractionImages';

interface ImageManagerProps {
  onImageUpdate?: (id: string, newPath: string) => void;
}

export const ImageManager: React.FC<ImageManagerProps> = ({ onImageUpdate }) => {
  const [selectedAttraction, setSelectedAttraction] = useState<string>('');
  const [newImagePath, setNewImagePath] = useState<string>('');
  const [showManager, setShowManager] = useState<boolean>(false);

  const handleImageUpdate = () => {
    if (selectedAttraction && newImagePath) {
      updateAttractionImage(selectedAttraction, newImagePath);
      onImageUpdate?.(selectedAttraction, newImagePath);
      setNewImagePath('');
      alert(`Image updated for ${selectedAttraction}`);
    }
  };

  const getAttractionById = (id: string): AttractionImage | undefined => {
    return wayanadAttractionImages.find(img => img.id === id);
  };

  if (!showManager) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowManager(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Manage Images
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Wayanad Attraction Image Manager</h2>
          <button
            onClick={() => setShowManager(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Attraction
            </label>
            <select
              value={selectedAttraction}
              onChange={(e) => setSelectedAttraction(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Choose an attraction...</option>
              {wayanadAttractionImages.map((attraction) => (
                <option key={attraction.id} value={attraction.id}>
                  {attraction.title}
                </option>
              ))}
            </select>
          </div>

          {selectedAttraction && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Image Path
                </label>
                <div className="p-2 bg-gray-100 rounded-md text-sm">
                  {getAttractionById(selectedAttraction)?.imagePath}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Image Path
                </label>
                <input
                  type="text"
                  value={newImagePath}
                  onChange={(e) => setNewImagePath(e.target.value)}
                  placeholder="/images/wayanad/new-image.jpg"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleImageUpdate}
                  disabled={!newImagePath}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Update Image
                </button>
                <button
                  onClick={() => {
                    setSelectedAttraction('');
                    setNewImagePath('');
                  }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Clear
                </button>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">All Attraction Images</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wayanadAttractionImages.map((attraction) => (
                <div key={attraction.id} className="border rounded-lg p-3">
                  <div className="font-medium text-sm">{attraction.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    ID: {attraction.id}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 break-all">
                    {attraction.imagePath}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 