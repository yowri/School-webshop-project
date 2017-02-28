-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Machine: 127.0.0.1
-- Gegenereerd op: 17 mrt 2016 om 09:20
-- Serverversie: 5.6.21
-- PHP-versie: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `webshopproject`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `address`
--

CREATE TABLE IF NOT EXISTS `address` (
`ID` int(11) NOT NULL,
  `Country` text NOT NULL,
  `Postal` text NOT NULL,
  `HouseNumber` text NOT NULL,
  `Phone` text NOT NULL,
  `Type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `category`
--

CREATE TABLE IF NOT EXISTS `category` (
`ID` int(11) NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
`ID` int(11) NOT NULL,
  `Email` text NOT NULL,
  `AddressId` int(11) NOT NULL,
  `PersonID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `customeraddress`
--

CREATE TABLE IF NOT EXISTS `customeraddress` (
`ID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `AddressID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `order`
--

CREATE TABLE IF NOT EXISTS `order` (
`ID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `ShoppingCartID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `product`
--

CREATE TABLE IF NOT EXISTS `product` (
`ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` text NOT NULL,
  `Price` double NOT NULL,
  `Amount` int(11) NOT NULL,
  `IsVisible` tinyint(1) NOT NULL,
  `Image` longblob NOT NULL,
  `categoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `shoppingcart`
--

CREATE TABLE IF NOT EXISTS `shoppingcart` (
`ID` int(11) NOT NULL,
  `Price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `shoppingcartproduct`
--

CREATE TABLE IF NOT EXISTS `shoppingcartproduct` (
`ID` int(11) NOT NULL,
  `ShoppingCartID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`ID` int(11) NOT NULL,
  `Password` text NOT NULL,
  `IsInvisible` tinyint(1) NOT NULL,
  `AccounType` int(11) NOT NULL,
  `PersonID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE IF NOT EXISTS `person` (
`ID` int(11) NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `DateOfBirth` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `address`
--
ALTER TABLE `address`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `category`
--
ALTER TABLE `category`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `customer`
--
ALTER TABLE `customer`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `customeraddress`
--
ALTER TABLE `customeraddress`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `order`
--
ALTER TABLE `order`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `product`
--
ALTER TABLE `product`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `shoppingcart`
--
ALTER TABLE `shoppingcart`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `shoppingcartproduct`
--
ALTER TABLE `shoppingcartproduct`
 ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `address`
--
ALTER TABLE `address`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `category`
--
ALTER TABLE `category`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `customer`
--
ALTER TABLE `customer`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `customeraddress`
--
ALTER TABLE `customeraddress`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `order`
--
ALTER TABLE `order`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `product`
--
ALTER TABLE `product`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `shoppingcart`
--
ALTER TABLE `shoppingcart`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `shoppingcartproduct`
--
ALTER TABLE `shoppingcartproduct`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `user`
--
ALTER TABLE `user`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
