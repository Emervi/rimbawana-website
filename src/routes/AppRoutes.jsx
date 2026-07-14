import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        /* 
        - BrowserRouter: digunakan untuk mengawasi dan menangkap URL yang ada di browser untuk nantinya dicocokan
        dengan path Route yang ada di dalam Routes
        - Routes: berisi banyak route
        - Route: menyimpan alamat dan mengarahkan alamat tersebut kepada halaman yang dituju
        */
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<h1>Halo Rimbawana 🌲</h1>} 
                />

                {/* Untuk path yang kosong, maka tampilkan ini */}
                <Route 
                    path="*"
                    element={<h1>Kosong Loh Ya!</h1>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;