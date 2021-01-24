import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

const EditorPreview = (props) => {
  const {setEditorVisible} = props;

  return(
    <div className="editor-preview">
      <div className="editor-preview-content">
        <div className="editor-preview-content-header">
          <Button
            type="primary"
            onClick={() => setEditorVisible(true)}
            className="editor-preview-oper"
          >
            编辑
          </Button>
        </div>
      </div>
    </div>
  );
};

EditorPreview.propTypes = {
  setEditorVisible: PropTypes.func,
};

export default EditorPreview;