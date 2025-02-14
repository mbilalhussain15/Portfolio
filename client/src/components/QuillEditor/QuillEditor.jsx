import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './QuillEditor.css'; // Ensure this imports Tailwind CSS and custom styles

const QuillEditor = ({ value, onChange }) => {
  const handleChange = (content) => {
    onChange(content); // Pass content back to the parent
  };

  return (
    <div className="p-1">
      <ReactQuill
        value={value}
        onChange={handleChange}
        theme="snow"
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['clean']
          ],
        }}
        className="ql-container"
      />
    </div>
  );
};

export default QuillEditor;
