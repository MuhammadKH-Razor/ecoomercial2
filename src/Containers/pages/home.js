// import React, {Component} from 'react';
// import Logo from '../../Containers/assets/images/background/png/logo/images__3_-removebg-preview.png'
// import Logo1 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0088.jpg';
// import Logo2 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0090.jpg';
// import Logo3 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0091.jpg';
// import Logo4 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0092.jpg';
// import Logo5 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0093.jpg';
// import Logo6 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0094.jpg';
// import Logo7 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0095.jpg';
// import Logo8 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0096.jpg';
// import Logo9 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0097.jpg';
// import Logo10 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0098.jpg';
// import Logo11 from '../../Containers/assets/images/background/jpg/IMG-20200909-WA0089.jpg';
// import Logo12 from '../../Containers/assets/images/background/png/topi/images__25_-removebg-preview.png';

// import crb1 from '../../Containers/assets/images/background/jpg/nasi/tahu.jpg';
// import crb2 from '../../Containers/assets/images/background/jpg/nasi/lengko.jpg';
// import crb3 from '../../Containers/assets/images/background/jpg/nasi/jamblang1.jpg';
// import crb4 from '../../Containers/assets/images/background/jpg/nasi/kuning.jpg';
// import crb5 from '../../Containers/assets/images/background/jpg/nasi/gejrot.jpg';
// import crb6 from '../../Containers/assets/images/background/jpg/nasi/lengko1.jpg';
// import crb7 from '../../Containers/assets/images/background/jpg/nasi/jamblang.jpg';

// import topSeller from '../../Containers/assets/images/background/svg/food/undraw_online_groceries_a02y.svg';
// import limited1 from '../../Containers/assets/images/background/jpg/download.jpg';
// import limited2 from '../../Containers/assets/images/background/png/sepatu/images__23_-removebg-preview.png';
// import limited3 from '../../Containers/assets/images/background/jpg/nasi/seblak1.jpg';
// import limited4 from '../../Containers/assets/images/background/jpg/download.jpg';

// import topBrand1 from '../../Containers/assets/images/background/png/topi/download__12_-removebg-preview.png';
// import topBrand2 from '../../Containers/assets/images/background/png/camera/images__3_-removebg-preview.png';
// import topBrand3 from '../../Containers/assets/images/background/png/sepatu/images__44_-removebg-preview.png';
// import topBrand4 from '../../Containers/assets/images/background/png/laptop/images__68_-removebg-preview.png';
// import topBrand5 from '../../Containers/assets/images/background/png/baju/images__9_-removebg-preview.png';

// import sponsor1 from '../../Containers/assets/images/sponsor/images-removebg-preview.png';
// import sponsor2 from '../../Containers/assets/images/sponsor/download__1_-removebg-preview.png';
// import sponsor3 from '../../Containers/assets/images/sponsor/download-removebg-preview.png';

// import { Button, IconButton } from '@material-ui/core';
// import './home.css';
// import Star from './Home/star';

// import HomeOutlinedIcon from '@material-ui/icons/Home';
// import SearchOutlinedIcon from '@material-ui/icons/Search';
// import FlagOutlinedIcon from '@material-ui/icons/Flag';
// import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
// import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
// import ForumOutlinedIcon from '@material-ui/icons/Forum';
// import NotificationActiveOutlinedIcon from '@material-ui/icons/NotificationsActive';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircle';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import CloudDoneIcon from '@material-ui/icons/CloudDone';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import LoyaltyIcon from '@material-ui/icons/Loyalty';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import MailOutlinedIcon from '@material-ui/icons/Mail';
// import ShoppingCartlOutlinedIcon from '@material-ui/icons/ShoppingCart';
// import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCart';
// import MobileFriendlyOutlinedIcon from '@material-ui/icons/MobileFriendly';
// import AppsOutlinedIcon from '@material-ui/icons/Apps';

// import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
// import InstagramOutlinedIcon from '@material-ui/icons/Instagram';
// import WhatsAppOutlinedIcon from '@material-ui/icons/WhatsApp';
// import TwitterOutlinedIcon from '@material-ui/icons/Twitter';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCart';
// import CopyrightOutlinedIcon from '@material-ui/icons/Copyright';

// import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
// import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
// import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';

// // import SearchIcon from '@material-ui/icons/Search';
// // import AddIcon from '@material-ui/icons/Add';

// class Home extends Component {

//     state = {
//         checkListOrder: 0,
//         checkListBuy: []
//     }

//     componentDidMount = ()  => {
//             this.setState({
//                 isPage: true
//             })
//     }

//     orderChange = (name, value) => {
//         this.setState({
//             checkListOrder: this.state.checkListOrder + 1,
//             checkListBuy: [...this.state.checkListBuy, {name, value}]
//         })
//     }

//     render() {

//         const { checkListOrder, checkListBuy } = this.state;
//         const { orderChange } = this;
//         console.log('order kamu :' ,checkListBuy);

//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-fluid navbar-light nav">
//                 <div className="container-fluid contain-flui">
//                     <a className="navbar-brand logo" href="#">
//                         <img src={Logo} alt="beep logo"/>
//                     </a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto mb-2 mb-lg-0" style={{fontWeight: 'bold'}}>
//                         <li className="nav-item li1">
//                         <a className="nav-link" href="#">
//                             <BusinessCenterOutlinedIcon style={{fontSize: 29}}/>
//                         </a>
//                         </li>
//                         <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
//                             <PersonPinIcon style={{fontSize: 29}}/>
//                         </a>
//                         </li>
//                         <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
//                             <NotificationActiveOutlinedIcon style={{fontSize: 29}}/>
//                         </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
//                             <AccountCircleOutlinedIcon style={{fontSize: 29}}/>
//                             </a>
//                         </li>
//                     </ul>
//                     <form className="d-flex">
//                         <input className="form-control mr-2" type="search" placeholder="pencarian..." aria-label="Search"/>
//                         <button className="btn btn bts" type="submit"><SearchOutlinedIcon style={{fontSize: 29}}/></button>
//                     </form>
//                     </div>
//                     <div className="cart-wrap">
//                         <div className="cart">
//                             <ShoppingCartlOutlinedIcon style={{fontSize: 30, color: 'white'}}/>
//                             <div className="order">
//                                 { checkListOrder }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <div className="dashboard">
//                 <div className="wrap">
//                     <div className="btn-toggle">
//                         <AppsOutlinedIcon className="app" style={{fontSize: 50}}/>
//                     </div>
//                 </div>
//             </div>

//             <div className="jumbotron jumbotron-fluid jumbots">
//                 <div className="container">
//                     <div className="text-jumbots">
//                         <h1 className="display-4">50% Pelanggan Baru</h1>
//                         <p className="lead lead1">
//                             Dapatkan potongan separuh harga pada penjualan pertama kamu di MiShops's. Ada beberapa produk yang bisa kamu beli disini. Buruan kunjungin kami disini untuk dapatkan semuanya.
//                         </p>
//                         <hr className="my-4"/>
//                         <a className="btn btn btn-lg text-white ml-4 bt-get" href="#" role="button">Get Now</a>
//                     </div>
//                 </div>
//             </div>

//                 <h3 className="txt-kat h3"> Kategori Makanan </h3>
//                 <div className="wrap">

//                     <div className="header-right">
//                         <div className="limited-edition">
//                             <div className="limited-option">
//                                 <div className="nama-makanan s">
//                                     <h4> Kue Kering - Basah </h4>
//                                 </div>
//                                 <div className="gambar-makanan s">
//                                     <img src={limited1} alt=""/>
//                                 </div>
//                             </div>
//                             <div className="limited-option">
//                                 <div className="nama-makanan s">
//                                     <h4> Makanan Rumah </h4>
//                                 </div>
//                                 <div className="gambar-makanan s">
//                                 <img src={Logo6} alt=""/>
//                                 </div>
//                             </div>
//                             <div className="limited-option">
//                                 <div className="nama-makanan s">
//                                     <h4> Seblak super pedas </h4>
//                                 </div>
//                                 <div className="gambar-makanan s">
//                                     <img src={limited3} alt=""/>
//                                 </div>
//                             </div>
//                             <div className="limited-option">
//                                 <div className="nama-makanan s">
//                                     <h4> Makanan cepat saji </h4>
//                                 </div>
//                                 <div className="gambar-makanan s">
//                                     <img src={limited4} alt=""/>
//                                 </div>
//                             </div>
//                             <div className="limited-option">
//                                 <div className="nama-makanan s">
//                                     <h4> Khas Angkringan </h4>
//                                 </div>
//                                 <div className="gambar-makanan s">
//                                     <img src={limited3} alt=""/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="jumbot kerang">
//                     <div className="jumbotron jumbotron-fluid d-flex tron1">
//                             <div className="container">
//                                 <div className="text">
//                                     <h1 className="display-4">Kerang <br/> Hijau</h1>
//                                     <p className="lead">Menyediakan barang dan jasa yang anda butuhkan saat ini.</p>
//                                     <Star/> 
//                                     <button 
//                                     className="btn btn bt" 
//                                     name="hat ui" 
//                                     value="50.000"
//                                     data-toggle="modal" 
//                                     data-target="#staticBackdrop"
//                                     > 
//                                         Beli Langsung 
//                                     </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                             <div className="container img-cont">
//                                 <img src={Logo3} alt="logo"/>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="jumbotron jumbotron-fluid d-flex tron2">
//                             <div className="container">
//                                 <div className="text">
//                                     <h1 className="display-4">white <br/> hat UI</h1>
//                                     <p className="lead">Menyediakan barang dan jasa yang anda butuhkan saat ini.</p>
//                                     <Star/> 
//                                     <button 
//                                     className="btn btn bt" 
//                                     name="hat ui" 
//                                     value="50.000"
//                                     data-toggle="modal" 
//                                     data-target="#staticBackdrop"
//                                     > 
//                                         Beli Langsung 
//                                     </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                             <div className="container img-cont">
//                                 <img src={Logo3} alt="logo"/>
//                             </div>
//                             </div>
//                         </div>
//                 </div>

//                 <div className="global-kateg">
//                     <div className="kateg">

//                     <nav className="navbar navbar-expand-lg navbar-light navs nn">
//                         <div className="container">
//                             <a className="navbar-brand" href="#">Rekomendasi untuk mu</a>
//                             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ShoppingCartIcon style={{fontSize: 30}}/> Makanan </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><LoyaltyIcon style={{fontSize: 30}}/> Minuman </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><DashboardIcon style={{fontSize: 30}}/> Fashion </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><CloudDoneIcon style={{fontSize: 30}}/> Olahraga </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ComputerOutlinedIcon style={{fontSize: 30}}/> Jasa </a>
//                                 </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </nav>

//                         <div className="kategori">
//                         <div className="kate-card">
//                             <div className="card">
//                                 <img src={Logo1} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo2}className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo3} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo4} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo5} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo6} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo7} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo8} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/>
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo9} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo10} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> 
//                                 <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                     <div className="kateg2">

//                     <nav className="navbar navbar-expand-lg navbar-light navs nn">
//                         <div className="container">
//                             <a className="navbar-brand" href="#">Makanan tengah malam</a>
//                             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ShoppingCartIcon style={{fontSize: 30}}/> Makanan </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><LoyaltyIcon style={{fontSize: 30}}/> Minuman </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><DashboardIcon style={{fontSize: 30}}/> Fashion </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><CloudDoneIcon style={{fontSize: 30}}/> Olahraga </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ComputerOutlinedIcon style={{fontSize: 30}}/> Jasa </a>
//                                 </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </nav>

//                         <div className="kategori">
//                         <div className="kate-card">
//                             <div className="card">
//                                 <img src={Logo1} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo2}className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo3} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo4} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo5} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo6} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo7} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo8} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo9} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo10} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <img src={Logo11} className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>
//                                 <Star/> <button className="btn btn bt"> $99.99 </button>
//                                 <button 
//                                 className="btn btn-white bt2" 
//                                 onClick={() => orderChange('hat_ui', '$99.99')} 
//                                 > <AddShoppingCartOutlinedIcon/> 
//                                 </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>

//                     <div className="top-kategori">
//                     <nav className="navbar navbar-expand-lg navbar-light navs nn">
//                         <div className="container">
//                             <a className="navbar-brand" href="#">Makanan Khas Cirebon </a>
//                             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ShoppingCartIcon style={{fontSize: 30}}/> Makanan </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><LoyaltyIcon style={{fontSize: 30}}/> Minuman </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><DashboardIcon style={{fontSize: 30}}/> Fashion </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><CloudDoneIcon style={{fontSize: 30}}/> Olahraga </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#"><ComputerOutlinedIcon style={{fontSize: 30}}/> Jasa </a>
//                                 </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </nav>

//                         <div className="wrap-top">
//                             <div className="container-top">
//                                 <div className="top">
//                                     <div className="gambar-top">
//                                         <img src={crb1} alt=""/>
//                                     </div>
//                                     <div className="text-top">
//                                         <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>                                    </div>
//                                     <Star/> <button className="btn btn bt"> $99.99 </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                                 <div className="top">
//                                     <div className="gambar-top">
//                                         <img src={crb1} alt=""/>
//                                     </div>
//                                     <div className="text-top">
//                                         <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>                                    </div>
//                                     <Star/> <button className="btn btn bt"> $99.99 </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                                 <div className="top">
//                                     <div className="gambar-top">
//                                         <img src={crb6} alt=""/>
//                                     </div>
//                                     <div className="text-top">
//                                         <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>                                    </div>
//                                     <Star/> <button className="btn btn bt"> $99.99 </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                                 <div className="top">
//                                     <div className="gambar-top">
//                                         <img src={crb4} alt=""/>
//                                     </div>
//                                     <div className="text-top">
//                                         <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>                                    </div>
//                                     <Star/> <button className="btn btn bt"> $99.99 </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                                 <div className="top">
//                                     <div className="gambar-top">
//                                         <img src={crb7} alt=""/>
//                                     </div>
//                                     <div className="text-top">
//                                         <p> Makanan warung yang nikmat dan wajib untuk di coba nih guys! </p>                                    </div>
//                                     <Star/> <button className="btn btn bt"> $99.99 </button>
//                                     <button 
//                                     className="btn btn-white bt2" 
//                                     onClick={() => orderChange('hat_ui', '$99.99')} 
//                                     > <AddShoppingCartOutlinedIcon/> 
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                     <div className="footer">
//                         <footer>
//                             <div className="footer-input">
//                                 <SearchOutlinedIcon style={{color: 'white', fontSize: 29, marginRight: 10}}/> <input type="text"/>
//                             </div>
//                             <div className="menus">

//                                 <div className="more">
//                                     <h4> More About Company </h4>
//                                     <p> 
//                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, vero.
//                                     </p>
//                                 </div>

//                                 <div className="sosmed">
//                                     <h4> Keep Connected </h4>
//                                     <li>
//                                      <FacebookOutlinedIcon style={{fontSize: 30, color: 'white'}}/> Mi-Facebokk.com
//                                     </li>
//                                     <li>
//                                      <InstagramOutlinedIcon style={{fontSize: 27, color: 'white'}}/> Mi-Shoopps
//                                     </li>
//                                     <li>
//                                      <TwitterOutlinedIcon style={{fontSize: 27, color: 'white'}}/> Mi-PunyaBersama
//                                     </li>
//                                     <li>
//                                      <ShoppingCartOutlinedIcon style={{fontSize: 27, color: 'white'}}/> ShoppingMy
//                                     </li>
//                                 </div>

//                                 <div className="info">
//                                     <h4> Connected Information </h4>
//                                     <li><HomeOutlinedIcon style={{fontSize: 27, color: 'white'}}/> high restfull </li>
//                                     <li><MobileFriendlyOutlinedIcon style={{fontSize: 27, color: 'white'}}/> Data big </li>
//                                     <li><MailOutlinedIcon style={{fontSize: 27, color: 'white'}}/> Class high shop </li>
//                                 </div>

//                             </div>

//                             <div className="footer-copyright">
//                                 <div>
//                                     <CopyrightOutlinedIcon style={{color: 'white', fontSize: 29, marginRight: 10}}/> Copyright .etc 2020 By Mi-Shop's | 2023
//                                 </div>
//                                 <div className="privacy">
//                                     <li> Privacy Mi-Shop's |</li>
//                                     <li> Privacy Policy |</li>
//                                     <li> Terms & Conditions</li> 
//                                 </div>
//                             </div>

//                         </footer>
//                     </div>
                    
//                     <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                     <div class="modal-dialog">
//                         <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div class="modal-body">
//                             ...
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Understood</button>
//                         </div>
//                         </div>
//                     </div>
//                     </div>

//                     </div>
//               </div>
//         )
//     }
// }

// export default Home;