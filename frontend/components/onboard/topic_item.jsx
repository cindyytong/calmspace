
import React from 'react';
import { Link } from 'react-router-dom';

const TopicItem = ({topic}) => {
    return (
        <div className="topic-check">
            <input type="checkbox" value={topic} name={topic} id={topic}/>
            {topic}
        </div>
    )

}

export default TopicItem;