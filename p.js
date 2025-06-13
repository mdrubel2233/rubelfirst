//<![CDATA[
    function isBot() {
        const bots = [
            /bot/i, /crawl/i, /spider/i, /slurp/i, /mediapartners/i,
            /adsbot/i, /google/i, /bing/i, /yahoo/i, /duckduckgo/i,
            /baidu/i, /yandex/i, /sogou/i, /exabot/i
        ];
        return bots.some(bot => bot.test(navigator.userAgent));
    }

    if (!isBot()) {
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                const popupDiv = document.createElement("div");
                popupDiv.innerHTML = `
                    <style>
                        .popup-wrapper {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            z-index: 9999;
                            width: 100%;
                            padding: 10px;
                            box-sizing: border-box;
                        }
                        .popup {
                            background: #f2f2f2;
                            color: #000;
                            padding: 20px 20px 30px 20px;
                            border-radius: 12px;
                            text-align: center;
                            max-width: 350px;
                            width: 100%;
                            position: relative;
                            margin: 0 auto;
                            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                            font-family: inherit;
                        }
                        .cbtn {
                            position: absolute;
                            top: -12px;
                            right: -12px;
                            width: 32px;
                            height: 32px;
                            background-color: orange;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 20px;
                            font-weight: bold;
                            border: 2px solid #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                        }
                        .discount-label {
                            background-color: #abbcff;
                            color: #000;
                            padding: 8px 12px;
                            border-radius: 6px;
                            font-size: 16px;
                            margin-bottom: 12px;
                        }
                        .icon-grid {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            justify-items: center;
                            gap: 10px;
                            margin: 15px 0;
                        }
                        .icon-grid img {
                            width: 60px;
                            height: 60px;
                            border-radius: 12px;
                            object-fit: contain;
                            background: #fff;
                        }
                        .buy-button {
                            background-color: #ff9900;
                            color: #000;
                            padding: 10px 20px;
                            border: none;
                            border-radius: 8px;
                            font-size: 16px;
                            cursor: pointer;
                            text-decoration: none;
                            display: inline-block;
                        }
                        @media screen and (max-width: 600px) {
                            .popup {
                                padding: 15px;
                                font-size: 14px;
                                max-width: 95%;
                            }
                            .icon-grid img {
                                width: 50px;
                                height: 50px;
                            }
                        }
                    </style>
                    <div class='popup-wrapper' id='popup'>
                        <div class='popup'>
                            <span class='cbtn' onclick='document.getElementById(\"popup\").style.display=\"none\"'>X</span>
                            <div class='discount-label'> 100৳ কিনুন যেকোন প্রিমিয়াম অ্যাপ ও সফটওয়্যার নিজের অথবা ব্যবসার জন্য ওয়েবসাইট বানাতে এবং যেকোন মার্কেটিং পরামর্শ নিতে যোগাযোগ করুন  </div>
                            <div class='icon-grid'>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvwomkxb3Vs_XXASHR1D2KSmg_4Wg1XkrcIO0SVSQJRoYNAn1VStmUCvDvjKBuOucWsyIEGdu_cYu_vlNYYv9937WxtAHQ2JdstFq24EZSvn-2eoqLoELsKC1L1x2t3tlXbRWjyY2lpENOQ1QKbekhTyiXNh72DQLG2miHiMOyFpSCuP8W3ceKJrajMPg/s150/android.png'/>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtQI3z283HiJwb4OHaDllf4hSHAppd-ruWlLoqWEWQiRA7aMFnIHoQbD-xj8EDPZCm5BP8ZUrvp4n6OqaevGbOww4vlJ_7bvMyl6XNx1ZgkCtdNCh-920qEEjAmD0HfYhbSZrijQwc-fgA__ktwENDTV4O225BrN55TXF2yf3slwXULdW0d_x0PfZ8Bp8/s150/windos.png'/>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_aY9Moz2nDRz_ka8Of7ylV9jh76Me1GmvBhoN_VE7Tdg13BMFeAspmtr5YTOXMj7e0jbAwxTaKvTxcZtwnkNvgTrWQzxyxd53NFBAi0iUKUebA0IQS-Pk4bjevt238-1HxrckA0XV-JidD3XHzRb5L-XOTH6OG6HusGdKBud3EO6zB67YGsWl42uoaAE/s150/tver.png'/>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibtP7_y6NP1lvcR55K77Xv-3RMms9NCUY2R6tzfaeuGOJfrFZm-Mw3HUrZpBr2OzvOnVAzuprvWkTG56eN2XIZax7vGaZnOIl4c6222IkntkmBUA2vpESCSgBR9QBIc8D7yhCQCzpIkggncmTPnDPnDsOgk4sJ6W3q5UV4edLYusD1O5Wdw-Otj7XYdDE/s150/wordpress.png'/>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv5_FU_1vmY3MTvTr9cTuuzI7WKf1lKhMADYJt4g4qZExFLuTTRY30Vo5nOwp3EoMtJUN6QKsQ3PPpCGGTeK8-UL9qhOGSgimlCN7ZNDZ-vqsV9U7Vb78frOsR2QDAX1x_TqsKlAbcxzo7ZbDy38DGeLw5tKD1zXofCLCzry6elNn3DzMMMhgQTfaHVaI/s150/website.png'/>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju6XN_tZfk38qz1IhA-29G6ExLW96ad55NL7HvKwXm15PDj6b0NnOUTcN_FMeyYN1loWHsy5y8rryMbH4LUNjUR_njDRYW7OWQsqUkkKiSBM4CKYEyaYTdZ4dLj3RNl50CIz9Pn8b1y-nyqGSUvJc_ZuAskwjg454gO1DsI4_-xh_g2cE2vyxBToTFwi8/s150/engineering.png'/>
                               
                            </div>
                            <a class='buy-button' href='https://subjectit.online/' target='_blank' rel='nofollow noopener noreferrer'>Get Service</a>
                        </div>
                    </div>
                `;
                document.body.appendChild(popupDiv);
            }, 2000);
        });
    }
//]]>