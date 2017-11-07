import React from 'react'
import Theme from 'theme'
import { Link } from 'react-router'
import { paths } from 'constants'
import classes from './Boardgame.scss'

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
  { rank: 1, name: 'สมหมาย ใจดี', points: '999' },
  { rank: 2, name: 'สมศรี รักเรียน', points: '678' },
  { rank: 3, name: 'สมปอง ผองเพื่อน', points: '432' }
]

class Boardgame extends React.Component {
  componentWillMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  constructor(props) {
    super(props);
    this.state = {
      place: null,
      category: null,
      challenge: "a",
      sortby: 1,
      windowsize: window.innerWidth
    };
  }
  handleResize(e) {
    this.setState({ windowsize: window.innerWidth });
  }
  handlePlaceChange = (event, index, value) => {
    this.setState({ place: value });
  };

  handleChallengeChange = (event, index, value) => {
    this.setState({ challenge: value });
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
                  <MenuItem value="a" primaryText="ศึกวันค้าเพชรมหานคร"/>
                  {/*<MenuItem value="b" primaryText="งาน B" />*/}
                </SelectField>
              </ToolbarGroup>

              <ToolbarGroup>
                <SelectField
                  floatingLabelText="ร้านทีจัดแข่งขัน"
                  value={this.state.place}
                  onChange={this.handlePlaceChange}
                >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value="a" primaryText="BGA" />
                  <MenuItem value="b" primaryText="Boardville" />
                  <MenuItem value="c" primaryText="C-Train" />
                  <MenuItem value="d" primaryText="The Stronghold" />
                </SelectField>
                <SelectField
                  floatingLabelText="วัน/เวลาที่จัดแข่ง"
                  value={this.state.category}
                  onChange={this.handleCategoryChange}
                  autoWidth={true}
                >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value="a" primaryText="วันเสาร์ที่ 18 พฤศจิกายน 2560 เวลา 13:00 - 17:00" />
                  <MenuItem value="b" primaryText="วันอาทิตย์ที่ 19 พฤศจิกายน 2560 เวลา 13:00 - 17:00" />
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
              <h1 style={stylesJS.textCenter}>งานแข่งขัน ศึกวันค้าเพชรมหานคร</h1>
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
                    <TableHeaderColumn style={stylesJS.max5percen}>Rank</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={stylesJS.max5percen}>Points</TableHeaderColumn>

                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={false}
                >
                  <TableRow key={'Current User'} style={{backgroundColor : '#BBDEFB'}}>
                    <TableRowColumn style={stylesJS.max5percen}>3</TableRowColumn>
                    <TableRowColumn style={stylesJS.max5percen}>สมปอง ผองเพื่อน</TableRowColumn>
                    <TableRowColumn style={stylesJS.max5percen}>432</TableRowColumn>
                  </TableRow>
                  {tabdat.map((row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn style={stylesJS.max5percen}>{row.rank}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.name}</TableRowColumn>
                      <TableRowColumn style={stylesJS.max5percen}>{row.points}</TableRowColumn>
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
                floatingLabelText="ร้านที่เข้าร่วม"
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
export default Boardgame;
