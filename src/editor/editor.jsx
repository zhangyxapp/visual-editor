import React, {useState} from 'react';
import EditorPreview from './editor-preview';
import VisualEditor from './visual-editor';
import './editor.scss';

const Editor = () => {
  const [editorVisible, setEditorVisible] = useState(true);

  return(
    <div className="editor">
      {!editorVisible ? (
        <EditorPreview setEditorVisible={setEditorVisible} />
      ) : (
        <VisualEditor setEditorVisible={setEditorVisible} />
      )}
    </div>
  );
};

export default Editor;