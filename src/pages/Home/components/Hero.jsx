import { Component } from "react";
import HeroImage from "@/assets/images/hero.png";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero">
        <div className="container">
          <div
            className="row align-items-center"
            style={{ minHeight: "800dvh" }}
          >
            <div className="col-lg-6 col-12">
              <h1>
                Selamat Datang di Turing Shop
                <strong>Pusat Kebutuhan Harian Anda</strong>
              </h1>
              <h2>Temukan segala kebutuhan makanan dan kelontong di sini!</h2>
              <p className="my-4">
                Di Turing Shop, kami berkomitmen untuk menyediakan produk-produk
                berkualitas tinggi yang memenuhi semua kebutuhan sehari-hari
                Anda, mulai dari makanan segar, bahan pokok, sampai keperluan
                rumah tangga. Dengan harga terjangkau, belanja jadi lebih mudah
                dan menyenangkan!
              </p>
              <div className="row gap-4">
                <button className="col-4 btn btn-primary rounded-0">
                  Belanja Sekarang
                </button>
                <button className="col-4 btn btn-outline-secondary rounded-0">
                  Kontak Kami
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-12 py-5">
              <img src={HeroImage} alt="hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
