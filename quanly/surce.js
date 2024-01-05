var arrNhanVien = [];

function getValueUser(event) {
  var arrInput = document.querySelectorAll('form input, form select')
  // console.log(arrInput)

  var arrError = document.querySelectorAll('form span.text-danger')
  console.log(arrError)


  var nhanVien = new NhanVien();
  var isValid = true;
  
  

  for (var i = 0; i < arrInput.length; i++) {

    checkEmptyValue(arrInput[i].value, arrError[i].id )
    // console.log(checkEmptyValue(arrInput[i].value,arrError[i].id ))
    // isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    var id = arrInput[i].id;
    // thực hiện gọi tới các thuộc tính trong đối tượng sinh viên thông qua id và truyền dữ liệu vào
    nhanVien[id] = arrInput[i].value;
    
  }
  return nhanVien;
  // console.log(nhanVien)
  // if (isValid) {
  //   return nhanVien;
  // }
  
 
}
// document.getElementById('btnThemNV').onclick = getValueUser;

document.getElementById('QLNV').onsubmit = function (event){
    console.log("huhuhu")
    event.preventDefault();
  //  tạo mảng lấy dữ liệu nhân viên 
  // lấy dữ liệu nhân viên trên từng input hàm get valueUser

    var nhanVien = getValueUser();
    console.log(nhanVien)
    if (nhanVien) {
        // push phần tử sinhVien vào mảng
        arrNhanVien.push(nhanVien);
        console.log(arrNhanVien);
        // gọi dom tới thẻ form và sử dụng phương thức reset để xoá các dữ liệu đang có trên form
        document.getElementById('fromPut').reset();
}
luuDuLieuLocalStorage('arrNhanVien', arrNhanVien);
hienThiDuLieu();
}

function hienThiDuLieu(arr){
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  var content=''
  for (var i=0; i< arr.length; i++){
var nhanVien = arr[i]
    console.log(nhanVien);

    var newNhanVien = new NhanVien();
    // Object.assign giúp thực hiện việc clone object (nhân bản), cần truyền 2 tham số, tham số thứ nhất là object được nhận, tham số thứ 2 là object được cho
    nhanVien = Object.assign(newNhanVien, nhanVien);



    content += `
    <tr>
    <td>${nhanVien.tknv}</td>
    <td>${nhanVien.name}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.datepicker}</td>
    <td>${nhanVien.chucvu}</td>
    <td>${nhanVien.sumMoney()}</td>
    <td>${nhanVien.xeploai()}</td>
    <td>
        <button onclick="xoaDuLieuUser('${
          nhanVien.tknv
        }')" class="btn btn-danger">Xoá</button>
        
      </td>
      <td><button onclick="getInfoUser('${
        nhanVien.tknv
      }')" class="btn btn-warning ml-3" data-toggle="modal" data-target="#myModal">Sửa</button></td>
    `
  }

document.getElementById("tableDanhSach").innerHTML = content;

}

function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}


function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem('arrNhanVien'); // "abc" // null
  // kiểm tra xem dữ liệu lấy về có hay không
  if (dataLocal) {
    // xử lí hành động khi lấy được dữ liệu
    var convertData = JSON.parse(dataLocal);
    arrNhanVien = convertData;
    hienThiDuLieu();
  } else {
    // xử lí hành động khi không có dữ liệu để lấy
  }
}

layDuLieuLocalStorage()

function xoaDuLieuUser(maNV) {
  console.log(maNV);
  var index = -1;
  // splice (vị trí bắt đầu xoá,số lượng cần xoá = 1)
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == maNV) {
      // chắc chắn sinh viên này là sinh viên cần xoá
      console.log(i);
      index = i;
    }
  }
  // Cấu trúc điều kiện
  if (index != -1) {
    // dùng hàm splice để xoá
    arrNhanVien.splice(index, 1);
    // local = [ 3 phần tử] // xoá arrSinhVien = [ 2 phần tử ]
    luuDuLieuLocalStorage('arrNhanVien', arrNhanVien);
    hienThiDuLieu();
  }
}


function getInfoUser(maNV){
  console.log(maNV);
  var nhanVienIndex={}
  for (var i=0; i<arrNhanVien.length;i++){
    var nhanVien = arrNhanVien[i]
    if(nhanVien.tknv==maNV){
      nhanVienIndex = nhanVien;
    }
  }
   var arrInput = document.querySelectorAll('form input, form select');
   console.log(arrInput)
   for(var z=0;z<arrInput.length;z++){
    var htmlDom = arrInput[z]
    var id = htmlDom.id;
    htmlDom.value= nhanVienIndex[id]
   }
   document.getElementById('tknv').readOnly=true;
  
}

function editUser(){
  console.log("dmm")
  var nhanVien = getValueUser()
  console.log(nhanVien)
  for(var i =0;i<arrNhanVien.length;i++){
    if(nhanVien.tknv==arrNhanVien[i].tknv){
      arrNhanVien[i]= nhanVien;
    }
  }
  luuDuLieuLocalStorage('arrNhanVien', arrNhanVien);
  hienThiDuLieu();
  document.getElementById('fromPut').reset
  document.getElementById('tknv').readOnly= false
  
}

document.getElementById('btnCapNhat').onclick = editUser