import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

const QrCodeView = () => {
  const [url, setUrl] = useState("https://wkf.ms/3Umt1bY");
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: 120,
        width: "100%",
      }}>
      <QRCode
        size={600}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={url}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCodeView;
