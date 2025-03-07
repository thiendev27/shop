const old_productData = {
  "1": {
    "name": "Rau muống",
    "cost": "15.000/kg",
    "short_desc": "Rau muống tươi ngon, trồng tại Yên Thành.",
    "detail_desc": "Rau muống được trồng theo phương pháp truyền thống, đảm bảo an toàn và tươi ngon. Thích hợp cho các món xào, luộc."
  },
  "2": {
    "name": "Cải thìa",
    "cost": "20.000/kg",
    "short_desc": "Cải thìa xanh mướt, giàu vitamin.",
    "detail_desc": "Cải thìa được trồng theo tiêu chuẩn VietGAP, đảm bảo chất lượng và an toàn. Thích hợp cho các món xào, nấu canh."
  },
  "3": {
    "name": "Bí đao",
    "cost": "18.000/kg",
    "short_desc": "Bí đao tươi mát, giải nhiệt.",
    "detail_desc": "Bí đao được trồng tự nhiên, không sử dụng hóa chất. Thích hợp cho các món canh, hầm."
  },
  "4": {
    "name": "Bí đỏ",
    "cost": "25.000/kg",
    "short_desc": "Bí đỏ thơm ngon, giàu dinh dưỡng.",
    "detail_desc": "Bí đỏ được trồng trên đất phù sa màu mỡ, cho quả to và ngọt. Thích hợp cho các món canh, chè."
  },
  "5": {
    "name": "Cà chua",
    "cost": "22.000/kg",
    "short_desc": "Cà chua chín mọng, giàu vitamin C.",
    "detail_desc": "Cà chua được trồng trong nhà kính, đảm bảo chất lượng và an toàn. Thích hợp cho các món salad, xào."
  },
  "6": {
    "name": "Dưa chuột",
    "cost": "18.000/kg",
    "short_desc": "Dưa chuột giòn ngọt, giải khát.",
    "detail_desc": "Dưa chuột được trồng theo phương pháp hữu cơ, đảm bảo an toàn cho sức khỏe. Thích hợp cho các món salad, ăn sống."
  },
  "7": {
    "name": "Khoai lang",
    "cost": "15.000/kg",
    "short_desc": "Khoai lang bở tơi, ngọt bùi.",
    "detail_desc": "Khoai lang được trồng trên đất cát pha, cho củ to và ngọt. Thích hợp cho các món luộc, nướng."
  },
  "8": {
    "name": "Rau ngót",
    "cost": "17.000/kg",
    "short_desc": "Rau ngót tươi xanh, nấu canh ngọt mát.",
    "detail_desc": "Rau ngót được trồng theo phương pháp truyền thống, đảm bảo an toàn. Thích hợp cho các món canh."
  },
  "9": {
    "name": "Mướp hương",
    "cost": "20.000/kg",
    "short_desc": "Mướp hương thơm ngát, vị ngọt tự nhiên.",
    "detail_desc": "Mướp hương được trồng tại vườn nhà, đảm bảo tươi ngon. Thích hợp cho các món xào, nấu canh."
  },
  "10": {
    "name": "Ớt chuông",
    "cost": "30.000/kg",
    "short_desc": "Ớt chuông Đà Lạt, màu sắc bắt mắt.",
    "detail_desc": "Ớt chuông được trồng tại vườn nhà, đảm bảo tươi ngon và an toàn. Thích hợp cho các món xào, salad."
  },
  "11": {
    "name": "Cam Vinh",
    "cost": "35.000/kg",
    "short_desc": "Cam Vinh chính gốc, ngọt thơm.",
    "detail_desc": "Cam Vinh được trồng tại các nhà vườn uy tín, đảm bảo chất lượng. Thích hợp để ăn tươi, ép nước."
  },
  "12": {
    "name": "Bưởi Diễn",
    "cost": "40.000/quả",
    "short_desc": "Bưởi Diễn ngọt đậm, mọng nước.",
    "detail_desc": "Bưởi Diễn được trồng tại các nhà vườn lâu năm, đảm bảo chất lượng. Thích hợp để ăn tươi, làm quà biếu."
  },
  "13": {
    "name": "Chuối tiêu hồng",
    "cost": "12.000/kg",
    "short_desc": "Chuối tiêu hồng ngọt ngào, thơm lừng.",
    "detail_desc": "Chuối tiêu hồng được trồng tại vườn nhà, đảm bảo chín tự nhiên. Thích hợp để ăn tươi, làm sinh tố."
  },
  "14": {
    "name": "Dưa hấu",
    "cost": "25.000/kg",
    "short_desc": "Dưa hấu ngọt mát, giải nhiệt mùa hè.",
    "detail_desc": "Dưa hấu được trồng tại các ruộng cát ven sông, đảm bảo chất lượng. Thích hợp để ăn tươi, ép nước."
  },
  "15": {
    "name": "Xoài cát chu",
    "cost": "30.000/kg",
    "short_desc": "Xoài cát chu ngọt lịm, thơm ngát.",
    "detail_desc": "Xoài cát chu được trồng tại các vườn cây lâu năm, đảm bảo chất lượng. Thích hợp để ăn tươi, làm sinh tố."
  },
  "16": {
    "name": "Thanh long ruột đỏ",
    "cost": "35.000/kg",
    "short_desc": "Thanh long ruột đỏ ngọt ngào, giàu dinh dưỡng.",
    "detail_desc": "Thanh long ruột đỏ được trồng tại các nhà vườn uy tín, đảm bảo chất lượng. Thích hợp để ăn tươi, làm sinh tố."
  },
  "17": {
    "name": "Ổi lê",
    "cost": "20.000/kg",
    "short_desc": "Ổi lê giòn ngọt, thơm lừng.",
    "detail_desc": "Ổi lê được trồng tại vườn nhà, đảm bảo tươi ngon và an toàn. Thích hợp để ăn tươi, làm gỏi."
  },
  "18": {
    "name": "Chanh tươi",
    "cost": "10.000/kg",
    "short_desc": "Chanh tươi mọng nước, thơm mát.",
    "detail_desc": "Chanh tươi được trồng tại vườn nhà, đảm bảo chất lượng. Thích hợp để pha nước chanh, nêm gia vị."
  },
  "19": {
    "name": "Hành lá",
    "cost": "12.000/kg",
    "short_desc": "Hành lá tươi xanh, thơm nồng.",
    "detail_desc": "Hành lá được trồng tại vườn nhà, đảm bảo tươi ngon. Thích hợp để nêm gia vị, trang trí món ăn."
  },
  "20": {
    "name": "Tỏi ta",
    "cost": "40.000/kg",
    "short_desc": "Tỏi ta thơm nồng, tép chắc.",
    "detail_desc": "Tỏi ta được trồng tại các ruộng đất pha cát, đảm bảo chất lượng. Thích hợp để nêm gia vị, làm thuốc."
  }
};

const productData = {
  "1": {
    "name": "Bắp cải",
    "cost": "27.500/1kg",
    "short_desc": "Bắp cải tươi xanh, cuộn tròn đầy đặn.",
    "detail_desc": "Bắp cải được trồng trọt cẩn thận, từng lớp lá xanh mát ôm chặt. Hương vị ngọt ngào thanh khiết, mang đến cảm giác tươi mới.",
    "img": "res/photo/product/Bap-cai.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "2": {
    "name": "Rau muống",
    "cost": "35.000/1kg",
    "short_desc": "Rau muống xanh mướt, tươi non.",
    "detail_desc": "Rau muống được thu hoạch từ những luống rau xanh tươi, từng cọng rau non mơn mởn, giòn tan. Hương vị tự nhiên, thanh mát, làm dịu mát ngày hè.",
    "img": "res/photo/product/Rau-muong.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "3": {
    "name": "Rau răm",
    "cost": "55.000/1kg",
    "short_desc": "Rau răm hương thơm nồng nàn, quyến rũ.",
    "detail_desc": "Rau răm mang hương vị đặc trưng, từng chiếc lá nhỏ nhắn tỏa hương thơm nồng nàn, quyến rũ. Gợi nhớ hương vị ấm áp của gian bếp gia đình.",
    "img": "res/photo/product/Rau-ram.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "4": {
    "name": "Cải bó xôi",
    "cost": "50.000/1kg",
    "short_desc": "Cải bó xôi tươi xanh, mềm mại.",
    "detail_desc": "Cải bó xôi được chăm sóc tỉ mỉ, từng chiếc lá xanh mướt, mượt mà. Vị ngọt tự nhiên, thanh mát, tan chảy trong miệng.",
    "img": "res/photo/product/Cai-bo-xoi.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "5": {
    "name": "Cải bẹ",
    "cost": "25.000/1kg",
    "short_desc": "Cải bẹ ngọt ngào, giòn tan.",
    "detail_desc": "Cải bẹ được trồng trọt cẩn thận, từng chiếc lá xanh non mơn mởn. Vị ngọt thanh khiết, giòn sần sật, mang đến cảm giác tươi mới.",
    "img": "res/photo/product/Cai-be-xanh.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "6": {
    "name": "Bạc hà",
    "cost": "90.000/1kg",
    "short_desc": "Bạc hà hương thơm the mát, sảng khoái.",
    "detail_desc": "Bạc hà mang đến cảm giác sảng khoái, từng chiếc lá nhỏ bé tỏa hương thơm nồng nàn, xua tan mọi mệt mỏi.",
    "img": "res/photo/product/Rau-bac-ha.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "7": {
    "name": "Bông bí",
    "cost": "50.000/1kg",
    "short_desc": "Bông bí sắc vàng tươi tắn, ngọt ngào.",
    "detail_desc": "Bông bí được thu hoạch từ những luống bí xanh mướt, từng bông hoa vàng ươm, mềm mại. Vị ngọt thanh tao, quyện trong hương thơm dịu dàng.",
    "img": "res/photo/product/Bong-bi.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "8": {
    "name": "Giá đỗ",
    "cost": "20.000/1kg",
    "short_desc": "Giá đỗ trắng ngần, giòn ngọt.",
    "detail_desc": "Giá đỗ được ươm mầm từ những hạt đậu xanh tinh túy, từng cọng giá trắng muốt, giòn tan. Vị ngọt thanh mát, mang đến nguồn năng lượng dồi dào.",
    "img": "res/photo/product/Gia-do.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "9": {
    "name": "Lá lốt",
    "cost": "125.000/1kg",
    "short_desc": "Lá lốt hương thơm nồng ấm, đặc trưng.",
    "detail_desc": "Lá lốt mang hương vị đặc trưng, từng chiếc lá xanh mướt, tỏa hương thơm quyến rũ. Vị cay nồng ấm áp, đánh thức mọi giác quan.",
    "img": "res/photo/product/La-lot.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "10": {
    "name": "Bưởi năm roi",
    "cost": "32.000/1kg",
    "short_desc": "Bưởi năm roi ngọt ngào, mọng nước.",
    "detail_desc": "Bưởi năm roi được vun trồng từ vùng đất phù sa màu mỡ, từng múi bưởi căng tròn, mọng nước. Vị ngọt thanh mát, tan chảy trong miệng.",
    "img": "res/photo/product/Buoi-5-roi.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "11": {
    "name": "Chanh leo",
    "cost": "40.000/1kg",
    "short_desc": "Chanh leo hương thơm nồng nàn, chua ngọt quyến rũ.",
    "detail_desc": "Chanh leo được hái từ những giàn leo xanh mướt, từng quả chanh căng tròn, mọng nước. Vị chua ngọt hòa quyện, đánh thức vị giác.",
    "img": "res/photo/product/Chanh-leo.jpg",
    "star": "4",
    "type": "trai-cay"
  },
  "12": {
    "name": "Cóc",
    "cost": "40.000/1kg",
    "short_desc": "Cóc vị chua thanh mát, giòn tan.",
    "detail_desc": "Cóc được hái từ những cây cóc trĩu quả, từng trái cóc xanh mướt, giòn tan. Vị chua thanh mát, kích thích vị giác.",
    "img": "res/photo/product/Coc.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "13": {
    "name": "Chuối tây",
    "cost": "30.000/1kg",
    "short_desc": "Chuối tây ngọt ngào, dẻo thơm.",
    "detail_desc": "Chuối tây được chín tự nhiên trên cây, từng quả chuối vàng ươm, dẻo thơm. Vị ngọt ngào, tan chảy trong miệng, mang đến cảm giác ngọt ngào.",
    "img": "res/photo/product/Chuoi-tay.jpg",
    "star": "4",
    "type": "trai-cay"
  },
  "14": {
    "name": "Chanh",
    "cost": "50.000/1kg",
    "short_desc": "Chanh hương thơm tươi mát, vị chua thanh khiết.",
    "detail_desc": "Chanh được hái từ những cây chanh xanh mướt, từng quả chanh căng tròn, mọng nước. Hương thơm tươi mát, vị chua thanh khiết, đánh thức mọi giác quan.",
    "img": "res/photo/product/Chanh.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "15": {
    "name": "Dưa hấu",
    "cost": "38.000/1kg",
    "short_desc": "Dưa hấu đỏ mọng, ngọt ngào.",
    "detail_desc": "Dưa hấu được vun trồng từ những luống đất màu mỡ, từng trái dưa căng tròn, mọng nước. Vị ngọt ngào, thanh mát, tan chảy trong miệng.",
    "img": "res/photo/product/Dua-hau.jpg",
    "star": "4",
    "type": "trai-cay"
  },
  "16": {
    "name": "Rau muống",
    "cost": "15.000/kg",
    "short_desc": "Rau muống tươi ngon, trồng tại Yên Thành.",
    "detail_desc": "Rau muống được trồng theo phương pháp truyền thống, đảm bảo an toàn và tươi ngon. Thích hợp cho các món xào, luộc.",
    "img": "res/photo/product/Rau-muong.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "17": {
    "name": "Cải thìa",
    "cost": "20.000/kg",
    "short_desc": "Cải thìa xanh mướt, giàu vitamin.",
    "detail_desc": "Cải thìa được trồng theo tiêu chuẩn VietGAP, đảm bảo chất lượng và an toàn. Thích hợp cho các món xào, nấu canh.",
    "img": "res/photo/product/Cai-thia.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "18": {
    "name": "Bí đao",
    "cost": "18.000/kg",
    "short_desc": "Bí đao tươi mát, giải nhiệt.",
    "detail_desc": "Bí đao được trồng tự nhiên, không sử dụng hóa chất. Thích hợp cho các món canh, hầm.",
    "img": "res/photo/product/Bi-dao.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "19": {
    "name": "Bí đỏ",
    "cost": "25.000/kg",
    "short_desc": "Bí đỏ thơm ngon, giàu dinh dưỡng.",
    "detail_desc": "Bí đỏ được trồng trên đất phù sa màu mỡ, cho quả to và ngọt. Thích hợp cho các món canh, chè.",
    "img": "res/photo/product/Bi-do.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "20": {
    "name": "Cà chua",
    "cost": "22.000/kg",
    "short_desc": "Cà chua chín mọng, giàu vitamin C.",
    "detail_desc": "Cà chua được trồng trong nhà kính, đảm bảo chất lượng và an toàn. Thích hợp cho các món salad, xào.",
    "img": "res/photo/product/Ca-chua.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "21": {
    "name": "Dưa chuột",
    "cost": "18.000/kg",
    "short_desc": "Dưa chuột giòn ngọt, giải khát.",
    "detail_desc": "Dưa chuột được trồng theo phương pháp hữu cơ, đảm bảo an toàn cho sức khỏe. Thích hợp cho các món salad, ăn sống.",
    "img": "res/photo/product/Dua-chuot.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "22": {
    "name": "Khoai lang",
    "cost": "15.000/kg",
    "short_desc": "Khoai lang bở tơi, ngọt bùi.",
    "detail_desc": "Khoai lang được trồng trên đất cát pha, cho củ to và ngọt. Thích hợp cho các món luộc, nướng.",
    "img": "res/photo/product/Khoai-lang.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "23": {
    "name": "Rau ngót",
    "cost": "17.000/kg",
    "short_desc": "Rau ngót tươi xanh, nấu canh ngọt mát.",
    "detail_desc": "Rau ngót được trồng theo phương pháp truyền thống, đảm bảo an toàn. Thích hợp cho các món canh.",
    "img": "res/photo/product/Rau-ngot.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "24": {
    "name": "Mướp hương",
    "cost": "20.000/kg",
    "short_desc": "Mướp hương thơm ngát, vị ngọt tự nhiên.",
    "detail_desc": "Mướp hương được trồng tại vườn nhà, đảm bảo tươi ngon. Thích hợp cho các món xào, nấu canh.",
    "img": "res/photo/product/Muop-huong.jpg",
    "star": "4",
    "type": "rau-cu"
  },
  "25": {
    "name": "Ớt chuông",
    "cost": "30.000/kg",
    "short_desc": "Ớt chuông Đà Lạt, màu sắc bắt mắt.",
    "detail_desc": "Ớt chuông được trồng tại vườn nhà, đảm bảo tươi ngon và an toàn. Thích hợp cho các món xào, salad.",
    "img": "res/photo/product/Ot-chuong.jpg",
    "star": "5",
    "type": "rau-cu"
  },
  "26": {
    "name": "Cam Vinh",
    "cost": "35.000/kg",
    "short_desc": "Cam Vinh chính gốc, ngọt thơm.",
    "detail_desc": "Cam Vinh được trồng tại các nhà vườn uy tín, đảm bảo chất lượng. Thích hợp để ăn tươi, ép nước.",
    "img": "res/photo/product/Cam-Vinh.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "27": {
    "name": "Bưởi Diễn",
    "cost": "40.000/quả",
    "short_desc": "Bưởi Diễn ngọt đậm, mọng nước.",
    "detail_desc": "Bưởi Diễn được trồng tại các nhà vườn lâu năm, đảm bảo chất lượng. Thích hợp để ăn tươi, làm quà biếu.",
    "img": "res/photo/product/Buoi-Dien.jpg",
    "star": "4",
    "type": "trai-cay"
  },
  "28": {
    "name": "Chuối tiêu hồng",
    "cost": "12.000/kg",
    "short_desc": "Chuối tiêu hồng ngọt ngào, thơm lừng.",
    "detail_desc": "Chuối tiêu hồng được trồng tại vườn nhà, đảm bảo chín tự nhiên. Thích hợp để ăn tươi, làm sinh tố.",
    "img": "res/photo/product/Chuoi-tieu-hong.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "29": {
    "name": "Dưa hấu",
    "cost": "25.000/kg",
    "short_desc": "Dưa hấu ngọt mát, giải nhiệt mùa hè.",
    "detail_desc": "Dưa hấu được trồng tại các ruộng cát ven sông, đảm bảo chất lượng. Thích hợp để ăn tươi, ép nước.",
    "img": "res/photo/product/Dua-hau.jpg",
    "star": "4",
    "type": "trai-cay"
  },
  "30": {
    "name": "Xoài cát chu",
    "cost": "30.000/kg",
    "short_desc": "Xoài cát chu ngọt lịm, thơm ngát.",
    "detail_desc": "Xoài cát chu được trồng tại các vườn cây lâu năm, đảm bảo chất lượng. Thích hợp để ăn tươi, làm sinh tố.",
    "img": "res/photo/product/Xoai-cat-chu.jpg",
    "star": "5",
    "type": "trai-cay"
  },
  "31": {
    "name": "Thanh long ruột đỏ",
    "cost": "35.000/kg",
    "short_desc": "Thanh long ruột đỏ ngọt ngào, giàu dinh dưỡng.",
    "detail_desc": "Thanh long ruột đỏ được"
  }
};

const productNav = {
  "tat-ca": {
    "title": "Toàn bộ sản phẩm",
    "desc": "Tất cả các loại rau củ quả tươi ngon, chất lượng cao nhất từ Yên Thành."
  },
  "trai-cay": {
    "title": "Trái cây",
    "desc": "Các loại trái cây tươi ngon, chín mọng, giàu vitamin từ vườn nhà Yên Thành."
  },
  "rau-cu": {
    "title": "Rau củ",
    "desc": "Rau củ tươi xanh, sạch sẽ, đảm bảo an toàn cho sức khỏe từ Yên Thành."
  },
  "thuc-pham-khac": {
    "title": "Thực phẩm khác",
    "desc": "Các loại thực phẩm khô, gia vị, đặc sản địa phương từ Yên Thành."
  }
};

function getParam(name){
  const param = window.location.search;
  let search = new URLSearchParams(param);
  return search.get(name);
};


