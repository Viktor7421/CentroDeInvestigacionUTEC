import React from 'react';
import Logout from '../Logout/Logout'
import { Dropdown, Icon, Menu, Image } from 'semantic-ui-react'
import './Dashboard.scss';

function Dashboard() {
  return (
    <div>
      <Menu attached='top' secondary>
        <Dropdown item icon='wrench' simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='dropdown' />
              <span className='text'>New</span>

              <Dropdown.Menu>
                <Dropdown.Item>Document</Dropdown.Item>
                <Dropdown.Item>Image</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Save...</Dropdown.Item>
            <Dropdown.Item>Edit Permissions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Dropdown item trigger={<span><Image src='https://lh3.googleusercontent.com/ogw/ADea4I4SI_2r3mTqHmWpJtJMlQnTr9HvORbaMKB0Upao=s32-c-mo' avatar /></span>} simple>
            <Dropdown.Menu>
              <Logout/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
export default Dashboard;