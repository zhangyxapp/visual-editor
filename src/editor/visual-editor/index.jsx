import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import {
  RedoOutlined,
  UndoOutlined,
  EditOutlined,
  ExportOutlined,
  ImportOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
  ReloadOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import './index.scss';

const VisualEditor = (props) => {
  const {setEditorVisible} = props;

  const oncloseEditor = () => {
    Modal.confirm({
      title: '警告',
      content: '您确定要退出编辑器吗？',
      onOk: () => setEditorVisible(false)
    });
  };

  return (
    <div className="visula-editor">
      <div className="visula-editor-content">
        <div className="visula-editor-component">

        </div>
        <div className="visula-editor-oper">
          <div className="visula-editor-oper-menu">
            <span className="visula-editor-oper-menu-item">
              <UndoOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <RedoOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <EditOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <ExportOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <ImportOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <VerticalAlignTopOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <VerticalAlignBottomOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <DeleteOutlined />
            </span>
            <span className="visula-editor-oper-menu-item">
              <ReloadOutlined />
            </span>
            <span
              className="visula-editor-oper-menu-item"
              onClick={oncloseEditor}
            >
              <PoweroffOutlined />
            </span>
          </div>
        </div>
        <div className="visula-editor-config">

        </div>
      </div>
    </div>
  );
};

VisualEditor.propTypes = {
  setEditorVisible: PropTypes.func,
};

export default VisualEditor;