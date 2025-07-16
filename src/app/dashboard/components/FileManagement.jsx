import React, { useState, useRef } from 'react';

const FileManagement = () => {
  const [selectedFolder, setSelectedFolder] = useState('root');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef(null);

  const folders = [
    { id: 'root', name: 'Root', parent: null, files: 145, size: '2.3GB' },
    { id: 'documents', name: 'Documents', parent: 'root', files: 67, size: '890MB' },
    { id: 'images', name: 'Images', parent: 'root', files: 234, size: '1.2GB' },
    { id: 'videos', name: 'Videos', parent: 'root', files: 12, size: '4.5GB' },
    { id: 'backups', name: 'Backups', parent: 'root', files: 8, size: '850MB' },
    { id: 'temp', name: 'Temporary', parent: 'root', files: 45, size: '123MB' },
  ];

  const files = [
    { id: 1, name: 'user-manual.pdf', type: 'pdf', size: '2.3MB', modified: '2024-01-15', folder: 'documents', thumbnail: '📄' },
    { id: 2, name: 'company-logo.png', type: 'image', size: '456KB', modified: '2024-01-14', folder: 'images', thumbnail: '🖼️' },
    { id: 3, name: 'database-backup.sql', type: 'database', size: '45MB', modified: '2024-01-13', folder: 'backups', thumbnail: '🗃️' },
    { id: 4, name: 'presentation.pptx', type: 'presentation', size: '8.9MB', modified: '2024-01-12', folder: 'documents', thumbnail: '📊' },
    { id: 5, name: 'profile-photo.jpg', type: 'image', size: '1.2MB', modified: '2024-01-11', folder: 'images', thumbnail: '📸' },
    { id: 6, name: 'system-config.json', type: 'config', size: '23KB', modified: '2024-01-10', folder: 'root', thumbnail: '⚙️' },
    { id: 7, name: 'tutorial-video.mp4', type: 'video', size: '234MB', modified: '2024-01-09', folder: 'videos', thumbnail: '🎥' },
    { id: 8, name: 'temp-file.tmp', type: 'temp', size: '12KB', modified: '2024-01-08', folder: 'temp', thumbnail: '📝' },
  ];

  const storageStats = [
    { label: 'Total Storage', value: '10TB', used: '2.3TB', percentage: 23 },
    { label: 'Documents', value: '890MB', used: '890MB', percentage: 8.9 },
    { label: 'Images', value: '1.2GB', used: '1.2GB', percentage: 12 },
    { label: 'Videos', value: '4.5GB', used: '4.5GB', percentage: 45 },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'image': return '🖼️';
      case 'video': return '🎥';
      case 'database': return '🗃️';
      case 'presentation': return '📊';
      case 'config': return '⚙️';
      case 'temp': return '📝';
      default: return '📄';
    }
  };

  const getFileTypeColor = (type) => {
    switch (type) {
      case 'pdf': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'image': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'video': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'database': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'presentation': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const filteredFiles = files.filter(file => 
    selectedFolder === 'root' ? true : file.folder === selectedFolder
  );

  const handleFileSelect = (fileId) => {
    setSelectedFiles(prev => 
      prev.includes(fileId) 
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    console.log('Uploading files:', uploadedFiles);
    // Handle file upload logic here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">File Management</h2>
          <p className="text-gray-400">Upload, organize, and manage your files</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {viewMode === 'grid' ? '📋' : '⊞'} View
          </button>
          <button 
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            📤 Upload Files
          </button>
        </div>
      </div>

      {/* Storage Stats */}
      <div className="grid grid-cols-4 gap-6">
        {storageStats.map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between mb-3">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-sm text-gray-400">{stat.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* File Browser */}
      <div className="grid grid-cols-4 gap-6">
        {/* Folder Tree */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Folders</h3>
          <div className="space-y-2">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  selectedFolder === folder.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <span className="text-xl">📁</span>
                <div className="flex-1 text-left">
                  <p className="font-medium">{folder.name}</p>
                  <p className="text-xs text-gray-400">{folder.files} files • {folder.size}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* File Display */}
        <div className="col-span-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">
              Files in {folders.find(f => f.id === selectedFolder)?.name || 'Root'}
            </h3>
            <div className="flex items-center gap-3">
              {selectedFiles.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">{selectedFiles.length} selected</span>
                  <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors">
                    Delete
                  </button>
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    Move
                  </button>
                </div>
              )}
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div 
                  key={file.id}
                  onClick={() => handleFileSelect(file.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedFiles.includes(file.id)
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{getFileIcon(file.type)}</div>
                    <h4 className="font-medium text-sm mb-2 truncate">{file.name}</h4>
                    <div className="space-y-1">
                      <span className={`px-2 py-1 rounded text-xs ${getFileTypeColor(file.type)}`}>
                        {file.type.toUpperCase()}
                      </span>
                      <p className="text-xs text-gray-400">{file.size}</p>
                      <p className="text-xs text-gray-500">{file.modified}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredFiles.map((file) => (
                <div 
                  key={file.id}
                  onClick={() => handleFileSelect(file.id)}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                    selectedFiles.includes(file.id)
                      ? 'border border-purple-500 bg-purple-500/20'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{getFileIcon(file.type)}</span>
                    <div>
                      <h4 className="font-medium">{file.name}</h4>
                      <p className="text-sm text-gray-400">{file.size} • Modified {file.modified}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs ${getFileTypeColor(file.type)}`}>
                      {file.type.toUpperCase()}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                        Download
                      </button>
                      <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Recent File Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Uploaded', file: 'user-manual.pdf', user: 'admin@system.com', time: '2 hours ago' },
            { action: 'Downloaded', file: 'company-logo.png', user: 'designer@company.com', time: '4 hours ago' },
            { action: 'Deleted', file: 'old-backup.sql', user: 'admin@system.com', time: '1 day ago' },
            { action: 'Shared', file: 'presentation.pptx', user: 'manager@company.com', time: '2 days ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.action === 'Uploaded' ? 'bg-green-500' :
                  activity.action === 'Downloaded' ? 'bg-blue-500' :
                  activity.action === 'Deleted' ? 'bg-red-500' : 'bg-purple-500'
                } animate-pulse`} />
                <div>
                  <p className="font-medium">
                    <span className="text-gray-300">{activity.action}</span> {activity.file}
                  </p>
                  <p className="text-sm text-gray-400">{activity.user}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Upload Files</h3>
            
            <div 
              className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center mb-6 hover:border-purple-500 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-4xl mb-4">📤</div>
              <p className="text-lg font-medium mb-2">Drop files here or click to browse</p>
              <p className="text-sm text-gray-400">Support for multiple file types up to 100MB each</p>
            </div>

            <input 
              ref={fileInputRef}
              type="file" 
              multiple 
              onChange={handleFileUpload}
              className="hidden"
            />

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Upload to Folder</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  {folders.map(folder => (
                    <option key={folder.id} value={folder.id}>{folder.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileManagement;
