import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './components/Feed';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse => {
        console.log("check response data::::::::", parsedResponse);
        return parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }));
      }
      )

      .then(contacts => {
        console.log("contract:::::::::::", contacts);
        this.setState({ contacts })
      });
    console.log("this.state:::::::::::", this.state)
  }
  render() {



    /*  < div className = "App" >
         <Feed contacts={this.state.contacts} />
      //  <h4>{this.state.contacts.map((ele,i) => <p key={i}>{ele}</p>)}</h4>
     </div > */
    return (
      <div className="App">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOC Demo app
              </a>
            </li>
          </ul>
        </nav>

        <Feed contacts={this.state.contacts} />
      </div>
    );
  }

}

export default App;
