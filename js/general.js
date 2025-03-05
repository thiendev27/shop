const productData = {
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
}
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
}

function getParam(name){
  const param = window.location.search;
  let search = new URLSearchParams(param);
  return search.get(name);
}