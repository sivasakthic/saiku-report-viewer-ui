/**
 *   Copyright 2017 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React, { Component } from 'react';
import Container from '../Container';
import Topbar from '../Topbar';
import Menubar from '../Menubar';
import Toolbar from '../Toolbar';
import ReportForm from '../ReportForm';
import ReportViewer from '../ReportViewer';
import WaitModal from '../WaitModal';
import ErrorModal from '../ErrorModal';
import ReportPrinter from '../ReportPrinter';

class App extends Component {
  render() {
    const {
      showForm,
      ...props
    } = this.props;

    return (
      <Container>
        <Topbar title="Report Viewer" />
        <Menubar {...props} />
        <ReportForm showForm={showForm} {...props} />
        <Toolbar showForm={showForm} {...props} />
        <ReportViewer {...props} />
        <WaitModal {...props} />
        <ErrorModal {...props} />
        <ReportPrinter {...props} />
      </Container>
    );
  }
}

export default App;
