function NhanVien(){
    this.tknv = ''
    this.name = ''
    this.email = ''
    this.password= ''
    this.datepicker= ''
    this.luongCB= 0
    this.chucvu= ''
    this.gioLam=0
    this.sumMoney = function(){
        var chucVu = this.chucvu
        var luong = Number(this.luongCB)
        var tongLuong =0;
        if(chucVu==="Sếp"){
            tongLuong= luong*3
        }
        if(chucVu==="Trưởng phòng"){
            tongLuong=luong*2
        }
        if(chucVu==="Nhân viên"){
            tongLuong=luong
        }
        return tongLuong
        // console.log(tongLuong)
    }
    this.xeploai = function(){
        var giolam = Number(this.gioLam)
        var loaiNV=''
        if(giolam<160){
            loaiNV= "trung bình"
        }
        else if(giolam>= 160&&giolam<176){
            loaiNV="Khá"
        }
        else if(giolam>=176&&giolam<192){
            loaiNV="giỏi"
        }
        else{
            loaiNV= "xuât sắc"
        }
        return loaiNV
    }
}