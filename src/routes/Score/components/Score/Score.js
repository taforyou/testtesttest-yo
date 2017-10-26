import React from 'react'
import Theme from 'theme'
import { Link } from 'react-router'
import { paths } from 'constants'
import classes from './Score.scss'

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import RaisedButton from 'material-ui/RaisedButton';
const tabdat = [
  { pos: 1, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
  { pos: 2, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
  { pos: 3, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
  { pos: 4, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
  { pos: 5, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
  { pos: 6, id_no: 313, id_name_no: 'M19-313', name: 'Mr.Harry Jones', net_time: '', category: 'M19', cat_pos: 1, gen_pos: 1, wave: 'ELITEM1', start: '07:09:24.55', cp1: '07:12:28.01', finish: '07:20:36.23' },
]

class Score extends React.Component {
  componentWillMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  constructor(props) {
    super(props);
    this.state = {
      gender: null,
      category: null,
      sortby: 1,
      windowsize: window.innerWidth
    };
  }
  handleResize(e) {
    this.setState({ windowsize: window.innerWidth });
  }
  handleGenderChange = (event, index, value) => {
    this.setState({ gender: value });
  };
  handleCategoryChange = (event, index, value) => {
    this.setState({ category: value });
  }
  handleChangeSortby = (event, value) => {
    this.setState({
      sortby: value,
    });
  };

  renderDesktop() {
    return (
      <div className={classes.container}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width:'100%'
        }}>
          <Paper zDepth={1} style={{
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
            <Toolbar style={{
              background: '#fff', justifyContent: 'space-between'
            }}>
              <ToolbarGroup firstChild={true}>
                <SelectField
                  floatingLabelText="งานแข่งขัน"
                  value={this.state.challenge}
                  onChange={this.handleChallengeChange}
                >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value="a" primaryText="งาน A" />
                  <MenuItem value="b" primaryText="งาน B" />
                </SelectField>
              </ToolbarGroup>
              <ToolbarGroup>
                <SelectField
                  floatingLabelText="Genders"
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value="m" primaryText="Male" />
                  <MenuItem value="f" primaryText="Female" />
                </SelectField>
                <SelectField
                  floatingLabelText="Categories"
                  value={this.state.category}
                  onChange={this.handleCategoryChange}
                >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value="F15" primaryText="F15" />
                  <MenuItem value="F19" primaryText="F19" />
                  <MenuItem value="F30" primaryText="F30" />
                  <MenuItem value="F40" primaryText="F40" />
                  <MenuItem value="F50" primaryText="F50" />
                  <MenuItem value="F60" primaryText="F60" />
                  <MenuItem value="M15" primaryText="M15" />
                  <MenuItem value="M19" primaryText="M19" />
                  <MenuItem value="M30" primaryText="M30" />
                  <MenuItem value="M40" primaryText="M40" />
                  <MenuItem value="M50" primaryText="M50" />
                  <MenuItem value="M60" primaryText="M60" />
                  <MenuItem value="VIP" primaryText="VIP" />
                </SelectField>
                <ToolbarSeparator />
                <IconMenu
                  iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                  onChange={this.handleChangeSortby}
                  value={this.state.sortby}
                >
                  <MenuItem value="1" primaryText="Sort by race number" />
                  <MenuItem value="2" primaryText="Sort by name" />
                  <MenuItem value="3" primaryText="Sort by fastest lap" />
                  <MenuItem value="4" primaryText="Sort by category" />
                  <MenuItem value="5" primaryText="Sort by net time" />
                </IconMenu>

              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label="Apply" primary={true} />
              </ToolbarGroup>
            </Toolbar>


          </Paper>
          <div className={classes.limitdt}>
            <Paper zDepth={1} style={{
              marginTop: 10,
              overflowX: 'auto',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h1 style={stylesJS.textCenter}>งานแข่งขัน Require authenticated</h1>
            </Paper>
            <Paper zDepth={1} style={{
              marginTop: 10,
              overflowX: 'auto'
            }}>
              <Table
                fixedHeader={true}
                selectable={false}
                fixedHeader={true}
                style={{
                  width: 1280
                }}
              >
                <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={false}
                >
                  <TableRow>
                    <TableHeaderColumn style={stylesJS.max5percen}>Pos.</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>ID No.</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>ID No.</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max10percen}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Net Time</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Category</TableHeaderColumn>

                    <TableHeaderColumn style={stylesJS.max5percen}>Cat Pos.</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Gen Pos.</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Wave</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Start</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>CP1</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Finish</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={false}
                >
                  {tabdat.map((row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn style={stylesJS.max5percen}>{row.pos}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.id_no}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.id_name_no}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max10percen}>{row.name}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.net_time}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.category}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.cat_pos}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.gen_pos}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.wave}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.start}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.cp1}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.finish}</TableRowColumn>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>
      </div>
    );
  }

  renderMobile() {
    return (
      <div className={classes.container}>
        <div style={{ width: '100%', background: '#fff', padding: '0 0 10px 10px' }}>
          <Toolbar style={{
            background: '#fff', justifyContent: 'space-between'
          }}>
            <ToolbarGroup firstChild={true}>
              <SelectField
                floatingLabelText="Genders"
                value={this.state.gender}
                onChange={this.handleGenderChange}
              >
                <MenuItem value={null} primaryText="" />
                <MenuItem value="m" primaryText="Male" />
                <MenuItem value="f" primaryText="Female" />
              </SelectField>
              <SelectField
                floatingLabelText="Categories"
                value={this.state.category}
                onChange={this.handleCategoryChange}
              >
                <MenuItem value={null} primaryText="" />
                <MenuItem value="F15" primaryText="F15" />
                <MenuItem value="F19" primaryText="F19" />
                <MenuItem value="F30" primaryText="F30" />
                <MenuItem value="F40" primaryText="F40" />
                <MenuItem value="F50" primaryText="F50" />
                <MenuItem value="F60" primaryText="F60" />
                <MenuItem value="M15" primaryText="M15" />
                <MenuItem value="M19" primaryText="M19" />
                <MenuItem value="M30" primaryText="M30" />
                <MenuItem value="M40" primaryText="M40" />
                <MenuItem value="M50" primaryText="M50" />
                <MenuItem value="M60" primaryText="M60" />
                <MenuItem value="VIP" primaryText="VIP" />
              </SelectField>
              <ToolbarSeparator />
              <IconMenu
                iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                onChange={this.handleChangeSortby}
                value={this.state.sortby}
              >
                <MenuItem value="1" primaryText="Sort by race number" />
                <MenuItem value="2" primaryText="Sort by name" />
                <MenuItem value="3" primaryText="Sort by fastest lap" />
                <MenuItem value="4" primaryText="Sort by category" />
                <MenuItem value="5" primaryText="Sort by net time" />
              </IconMenu>

            </ToolbarGroup>
            <ToolbarGroup>
              <RaisedButton label="Apply" primary={true} />
            </ToolbarGroup>
          </Toolbar>


        </div>
        <Paper zDepth={1} style={{
          overflowX: 'scroll',
          width:'100%',
          justifyContent:'flex-start'
        }}>
          <table>
            <thead>
              <tr>
                <th style={stylesJS.max5percen}>Pos.</th>
                <th style={stylesJS.max5percen}>ID No.</th>
                <th style={stylesJS.max5percen}>ID No.</th>
                <th style={stylesJS.max10percen}>Name</th>
                <th style={stylesJS.max5percen}>Net Time</th>
                <th style={stylesJS.max5percen}>Category</th>

                <th style={stylesJS.max5percen}>Cat Pos.</th>
                <th style={stylesJS.max5percen}>Gen Pos.</th>
                <th style={stylesJS.max5percen}>Wave</th>
                <th style={stylesJS.max5percen}>Start</th>
                <th style={stylesJS.max5percen}>CP1</th>
                <th style={stylesJS.max5percen}>Finish</th>
              </tr>
            </thead>
            <tbody>
              {tabdat.map((row, index) => (
                <tr key={index}>
                  <td style={stylesJS.max5percen}>{row.pos}</td>
                  <td style={stylesJS.max5percen}>{row.id_no}</td>
                  <td style={stylesJS.max5percen}>{row.id_name_no}</td>
                  <td style={stylesJS.max10percen}>{row.name}</td>
                  <td style={stylesJS.max5percen}>{row.net_time}</td>
                  <td style={stylesJS.max5percen}>{row.category}</td>
                  <td style={stylesJS.max5percen}>{row.cat_pos}</td>
                  <td style={stylesJS.max5percen}>{row.gen_pos}</td>
                  <td style={stylesJS.max5percen}>{row.wave}</td>
                  <td style={stylesJS.max5percen}>{row.start}</td>
                  <td style={stylesJS.max5percen}>{row.cp1}</td>
                  <td style={stylesJS.max5percen}>{row.finish}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </Paper>
      </div>
    );
  }
  render() {
    if (this.state.windowsize > 768) {
      return (this.renderDesktop());
    } else {
      return (this.renderMobile());
    }
  }
}
const stylesJS = {
  max5percen: {
    maxWidth: '3%',
    textAlign: 'center',
    padding: 5
  },
  max10percen: {
    maxWidth: '10%',
    textAlign: 'center',
    padding: 5
  },
  textCenter: {
    textAlign: 'center'
  }
}
export default Score;
