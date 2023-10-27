qrId = document.getElementById('idno');
qrName = document.getElementById('name');
qrdob = document.getElementById('dob');
qrDesignation = document.getElementById('designation');
qrPhone = document.getElementById('phone');
qrEmail = document.getElementById('email');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrId.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrlastname = () => {
  newQrData = qrId.value + qrName.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdob = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdesignation = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrDesignation.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrphone = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrDesignation.value+qrPhone.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrblank = () => {
  newQrData = "ID: " + qrId.value + "   " + "Name: "+ qrName.value + "   " + "date of birth: " + qrdob.value + "   " + "Designation: " + qrDesignation.value + "   " + "Phone.no: " + qrPhone.value + " Email: " + qrEmail.value;
  qrCode.update({
    data: newQrData
  });
};


const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));
