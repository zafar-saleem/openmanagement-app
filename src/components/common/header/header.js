import React from 'react';
import { Link, Route } from 'react-router-dom';

import Employees from '../../admin/employees/employeesComponent';
import New from '../../admin/new/newComponent';
import Profile from '../../admin/profile/profileComponent';
import Logout from '../../logoutComponent';

const Header = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/list`}>Employees</Link></li>
      <li><Link to={`${match.path}/new`}>New</Link></li>
      <li><Link to={`${match.path}/profile`}>Profile</Link></li>
      <li><Link to={`${match.path}/logout`}>Logout</Link></li>
    </ul>
    <Route path={`${match.path}/list`} component={Employees} />
    <Route path={`${match.path}/new`} component={New} />
    <Route path={`${match.path}/profile`} component={Profile} />
    <Route path={`${match.path}/logout`} component={Logout} />
  </div>
);

export default Header;