
//   What is React Router ??
        // React Router is a standard library for routing in react applications.

        import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

        <BrowserRouter>
            <link to="/"> Home </link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>