
// ================= PRODUCTS DATA =================

const products = [
    {
        id: 1,
        name: "Samsung Fast Charger",
        price: 800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714426/IMG-20260521-WA0030_gsdznb.jpg",
        alt: "Samsung fast charger - Baha Technocom Emasatsi"
    },
    {
        id: 2,
        name: "iPhone Lightning Cable",
        price: 600,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714432/IMG-20260521-WA0035_qnrfbq.jpg",
        alt: "iPhone lightning cable - Baha Technocom Kakamega"
    },
    {
        id: 3,
        name: "Wireless Bluetooth Earbuds",
        price: 1500,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714441/IMG-20260521-WA0040_lqvbic.jpg",
        alt: "Wireless bluetooth earbuds - electronics shop Emasatsi"
    },
    {
        id: 4,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714450/IMG-20260521-WA0034_bbvixd.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 5,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714474/IMG-20260521-WA0045_iayqpm.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 6,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714475/IMG-20260521-WA0037_kmfexn.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 7,
        name: "USB Flash Disk 32GB",
        price: 700,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714481/IMG-20260521-WA0043_rblhyh.jpg",
        alt: "32GB flash disk - electronics store Emasatsi"
    },
    {
        id: 8,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714489/IMG-20260521-WA0041_kijbmb.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 9,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714493/IMG-20260521-WA0039_wmijbv.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 10,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714519/IMG-20260521-WA0047_zprh2y.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 11,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714519/IMG-20260521-WA0044_oacrp4.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 12,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714520/IMG-20260521-WA0054_as1hv6.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 13,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714532/IMG-20260521-WA0055_vqdtwu.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 14,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714535/IMG-20260521-WA0048_koyek1.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 15,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779713065/IMG_20260525_153231_gstjvp.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 16,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779713061/IMG_20260525_153259_ljbo1i.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 17,
        name: "Bluetooth Speaker",
        price: 2200,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779713727/IMG-20260521-WA0009_wgatay.jpg",
        alt: "Portable bluetooth speaker - Baha Technocom"
    },
    {
        id: 18,
        name: "Type-C Fast Charging Cable",
        price: 500,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779713087/IMG_20260516_133444_qrzcyd.jpg",
        alt: "Type C charging cable - phone accessories Kakamega"
    },
    {
        id: 19,
        name: "Phone Holder Stand",
        price: 400,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714192/IMG-20260521-WA0006_xgfdw0.jpg",
        alt: "Phone holder stand - electronics shop Emasatsi"
    },
    {
        id: 20,
        name: "Smart Watch (Basic)",
        price: 3500,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714175/IMG-20260521-WA0007_lhg5f6.jpg",
        alt: "Basic smart watch - affordable electronics Kakamega"
    },
    {
        id: 21,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714191/IMG-20260521-WA0010_ajvmb5.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 22,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714222/IMG-20260521-WA0014_ibugba.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 23,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714191/IMG-20260521-WA0010_ajvmb5.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 24,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714227/IMG-20260521-WA0009_bpeixa.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 25,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714246/IMG-20260521-WA0017_pbn8cd.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 26,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714252/IMG-20260521-WA0012_ypfirb.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 27,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714256/IMG-20260521-WA0015_bztank.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 28,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714257/IMG-20260521-WA0016_ngdimc.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 29,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714278/IMG-20260521-WA0018_jklp30.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 30,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714284/IMG-20260521-WA0023_pcmxmm.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 31,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714319/IMG-20260521-WA0026_fshe5s.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 32,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714328/IMG-20260521-WA0022_ucctuv.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 33,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714328/IMG-20260521-WA0024_bzmmnz.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    
        {
        id: 34,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714330/IMG-20260521-WA0029_bquf50.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 35,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714333/IMG-20260521-WA0021_togsih.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 36,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714349/IMG-20260521-WA0028_opqkwo.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 37,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714351/IMG-20260521-WA0031_htufxe.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 38,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714363/IMG-20260521-WA0027_ufr7gn.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 39,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714371/IMG-20260521-WA0025_gylisq.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 40,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714390/IMG-20260521-WA0033_epbsxy.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 41,
        name: "Power Bank 10000mAh",
        price: 1800,
        image:"https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714415/IMG-20260521-WA0038_x0yzpt.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
        {
        id: 42,
        name: "Power Bank 10000mAh",
        price: 1800,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714492/IMG-20260521-WA0046_saqs1v.jpg",
        alt: "10000mAh power bank - phone accessories Kakamega"
    },
    {
        id: 43,
        name: "Laptop Charger Universal",
        price: 2500,
        image: "https://res.cloudinary.com/dwaqbsthr/image/upload/q_auto/f_auto/v1779714318/IMG-20260521-WA0020_kdlhqu.jpg",
        alt: "Universal laptop charger - electronics store Kakamega"
    }
];

