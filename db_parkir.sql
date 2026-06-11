-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_parkir`
--

CREATE DATABASE IF NOT EXISTS `db_parkir`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `db_parkir`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_parkir`
--

CREATE TABLE `data_parkir` (
  `id`       int(11)      NOT NULL,
  `nama`     varchar(100) NOT NULL COMMENT 'Nama petugas pencatat',
  `motor`    int(11)      NOT NULL DEFAULT 0 COMMENT 'Jumlah motor terparkir',
  `mobil`    int(11)      NOT NULL DEFAULT 0 COMMENT 'Jumlah mobil terparkir',
  `tanggal`  date         NOT NULL COMMENT 'Tanggal pencatatan',
  `isverif`  varchar(225) NOT NULL COMMENT 'Kode verifikasi petugas'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_parkir`
--
ALTER TABLE `data_parkir`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel `data_parkir`
--
ALTER TABLE `data_parkir`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
