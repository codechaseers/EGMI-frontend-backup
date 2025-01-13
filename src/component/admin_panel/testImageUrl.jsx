import React, { useState } from 'react';
import './addproduct.css';  

const TestImage = () => {
  const [groups, setGroups] = useState([
    [
      { id: 1, type: 'color', value: '' },
      { id: 2, type: 'text', value: '' },
      { id: 3, type: 'text', value: '' },
      { id: 4, type: 'url', value: '' },
    ],
  ]);

  const addGroup = () => {
    const newGroupId = groups.length + 1;
    setGroups([
      ...groups,
      [
        { id: newGroupId * 10 + 1, type: 'color', value: '' },
        { id: newGroupId * 10 + 2, type: 'text', value: '' },
        { id: newGroupId * 10 + 3, type: 'text', value: '' },
        { id: newGroupId * 10 + 4, type: 'url', value: '' },
      ],
    ]);
  };

  const deleteGroup = (index) => {
    const updatedGroups = groups.filter((_, idx) => idx !== index);
    setGroups(updatedGroups);
  };

  const deleteInput = (groupIndex, id) => {
    const updatedGroups = groups.map((group, idx) =>
      idx === groupIndex ? group.filter((input) => input.id !== id) : group
    );
    setGroups(updatedGroups);
  };

  const handleInputChange = (groupIndex, id, value) => {
    const updatedGroups = groups.map((group, idx) =>
      idx === groupIndex
        ? group.map((input) => (input.id === id ? { ...input, value } : input))
        : group
    );
    setGroups(updatedGroups);
  };

  return (
    <div className="input-group">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="group-container">
          {group.map((input) => (
            <div key={input.id}>
              {input.type === 'color' && (
                <input
                  type={input.type}
                  value={input.value}
                  onChange={(e) =>
                    handleInputChange(groupIndex, input.id, e.target.value)
                  }
                />
              )}
              {input.type === 'text' && (
                <input
                  type="text"
                  placeholder={input.id % 10 === 2 ? 'Color Code' : 'Text Input'}
                  value={input.value}
                  onChange={(e) =>
                    handleInputChange(groupIndex, input.id, e.target.value)
                  }
                />
              )}
              {input.type === 'url' && (
                <div className="url-input">
                  <input
                    type="url"
                    placeholder="URL"
                    value={input.value}
                    onChange={(e) =>
                      handleInputChange(groupIndex, input.id, e.target.value)
                    }
                  />
                  <button onClick={() => deleteInput(groupIndex, input.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
          <button onClick={() => deleteGroup(groupIndex)}>Delete Group</button>
        </div>
      ))}
      <button onClick={addGroup}>Add Group</button>
    </div>
  );
};


export default TestImage;
