import React from "react";
import './consumo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

const e = React.createElement;

const AppNav = () => (
  <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Blog</a>
  <a role="button" class="btn btn-outline-info navbar-btn" href="/logout">Logout</a>
  </nav>
  );

  const BASE_URL = "https://cors-anywhere.herokuapp.com/https://tf378xyae1.execute-api.sa-east-1.amazonaws.com/prod/images";
    
  
  const Card = ({item}) => {
    const { nome, data, url } = item;
    return (
   
      
      <div class="container">
      <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
      <br></br>
      <h5 class="card-title">{nome || "No Title"}</h5>
      <h5 class="card-title">{data || "No Title"}</h5>
      <div class="card-img" >{<img src={url} alt="{post.id}" height="100" width="100"/> || "No Content"}</div>
      <br></br>
      
      
      </div>
   
      </div> 
      </div>
      
      )
    }
    
    const row =  React.createElement;
    
    
    const col = React.createElement;
    col.className = "col-md-4";
    
    
    
    
    class tela extends React.Component {
      state = {
        isLoaded: false,
        error: null,
        posts: []
      };
      
      componentDidMount() {
        this.setState({ isLoaded: true });
        fetch(BASE_URL)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error("Erro ao buscar os posts");
          }
        })
        .then(posts => {
          console.log(posts);
          this.setState({ posts, isLoaded: false });
        })
        .catch(error => {
          this.setState({ error });
        });
      }
      
      render() {
        const { error, isLoaded, posts } = this.state;
        
        if (error) {
          return <p className="error-message">{error.message}</p>;
        }
        
        
        if (isLoaded) {
          return <p className="loaded-message">Buscando posts...</p>;
        }
        
        
        return (
          
          <div className="app">
          <AppNav />
          <h1>Blog Yapoli</h1>
          {/* <button type="button" class="mt-4 mb-2 btn btn-primary btn-sm float-right" onClick={this.addNewPost}>
          Add New Post
        </button> */}
        {posts.map(post => 
          (
            
            <Card item={post}></Card>
            
            ))}
            </div>
            
            );
          }
        }
        
        //const rootElement = document.getElementById("root");
        //ReactDOM.render(<LoginScreen />, rootElement);
        export default tela;