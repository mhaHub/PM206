/* Zona 1: Importaciones */
import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import CatalogoLibros from './screens/CatalogoLibros';

/* Zona 2: Función principal */
export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    loading ? <SplashScreen /> : <CatalogoLibros />
  );

}