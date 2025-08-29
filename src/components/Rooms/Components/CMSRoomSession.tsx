import { useState, useEffect, lazy, Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Lazy load the MDEditor to improve initial load performance
const MDEditor = lazy(() => import('@uiw/react-md-editor'));

interface CMSRoomSessionProps {
  heading: string;
  content: string;
  isEditing?: boolean;
  onContentChange?: (content: string) => void;
}

const CMSRoomSession = ({ 
  heading, 
  content, 
  isEditing = false, 
  onContentChange 
}: CMSRoomSessionProps) => {
  const [expanded, setExpanded] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const maxChars = 400;

  const isLong = localContent.length > maxChars;
  const preview = isLong ? localContent.slice(0, maxChars) + '...' : localContent;

  // Update local content when content prop changes
  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  // Handle content changes in edit mode
  const handleContentChange = (value: string | undefined) => {
    const newContent = value || '';
    setLocalContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  };

  // Render content with markdown support
  const renderContent = () => {
    if (isEditing) {
      return (
        <div className="w-full">
          <MDEditor
            value={localContent}
            onChange={handleContentChange}
            previewOptions={{
              remarkPlugins: [remarkGfm]
            }}
            height={400}
            className="w-full"
          />
          <div className="mt-2 text-sm text-gray-500">
            Supports <strong>**bold**</strong>, <em>*italic*</em>, [links](https://example.com), and other markdown syntax
          </div>
        </div>
      );
    }

    return (
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {expanded || !isLong ? localContent : preview}
        </ReactMarkdown>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={`sm:px-[12%] sm:pt-32 sm:pb-0 bg-[#FFF] px-4 mobile:pt-14 mobile:pb-6 large:px-[18%] ${isEditing ? 'py-8' : ''}`}>
      <div className="sm:py-12 flex flex-col sm:flex-row justify-center">
        {isEditing ? (
          <div className="w-full mb-4">
            <input
              type="text"
              value={heading}
              onChange={() => {}} // This is a placeholder, actual implementation would handle changes
              className="w-full text-2xl font-bold border rounded p-2"
              placeholder="Section Heading"
              disabled={!isEditing}
            />
          </div>
        ) : (
          <h2 className="flex-1 sm:text-[44px] text-[32px] font-ivy">
            {heading}
          </h2>
        )}
        <div className={`sm:w-[466px] sm:text-xl font-albertSans text-secondary ${isEditing ? 'w-full' : ''}`}>
          <Suspense fallback={<div>Loading editor...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CMSRoomSession;
