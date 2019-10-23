import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User src="https://www.themonitor.com/wp-content/uploads/sites/60/2019/08/Blake_Seth_mugshot.jpg" 
            alt="man" 
            name="Scott" />
            <div className="users__block">
                <User 
                    src="https://www.themonitor.com/wp-content/uploads/sites/60/2019/08/Blake_Seth_mugshot.jpg" 
                    alt="man" 
                    name="Scott"
                    min />
                <User 
                    src="https://www.themonitor.com/wp-content/uploads/sites/60/2019/08/Blake_Seth_mugshot.jpg" 
                    alt="man" 
                    name="Scott"
                    min />
                <User 
                    src="https://www.themonitor.com/wp-content/uploads/sites/60/2019/08/Blake_Seth_mugshot.jpg" 
                    alt="man" 
                    name="Scott"
                    min />

                <User 
                    src="https://www.themonitor.com/wp-content/uploads/sites/60/2019/08/Blake_Seth_mugshot.jpg" 
                    alt="man" 
                    name="Scott"
                    min />
            </div>
        </div>
    )
}