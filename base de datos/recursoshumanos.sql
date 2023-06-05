-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-06-2023 a las 00:30:31
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recursoshumanos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `Id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`Id`, `nombre`, `correo`, `contraseña`) VALUES
(1, 'Elon Musk', 'elonmusk@gmail.com', 'Elon123'),
(2, 'Jeff Bezos', 'jeffbezos@gmail.com', 'Jeff123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `telefono` bigint(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`nombre`, `apellido`, `telefono`, `correo`, `direccion`) VALUES
('Andres', 'Iniesta', 4427654321, 'andresiniesta@gmail.com', 'Barca no.8, colonia Sudafrica, C.P. 2010'),
('Lionel', 'Messi', 4421239876, 'lionelmessi@gmail.com', 'Barca no.10, colonia Qatar, C.P. 2022'),
('Xavi', 'Hernandez', 4429877654, 'xavihernandez@gmail.com', 'Barca no.6, colonia Sudafrica, C.P. 2010');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
