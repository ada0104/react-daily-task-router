import './App.css';
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

const Index = () => {
  return <p>這裡是首頁</p>;
};

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogOut/>
    </>
  );
};

const LogOut = () => {
  const navigate = useNavigate();
  return (
      <button onClick={() => {
        navigate('/login')
      }}
      >
        登出
      </button>
  )
};

const Login = () => {
  return <p>這是登入頁面</p>;
};

const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
