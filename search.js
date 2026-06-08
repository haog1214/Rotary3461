/* ═══════════════════════════════════════════════
   全站搜尋 search.js
   搜尋範圍：localStorage 資料 + 靜態頁面內容
═══════════════════════════════════════════════ */
(function () {
  /* ── 靜態頁面索引 ── */
    const STATIC_PAGES = [
    { title: "首頁", url: "index.html",
      text: `國際扶輪第3461地區 | Rotary District 3461 官方網站 國際扶輪第3461地區 Rotary District 3461 — 台中、彰化、南投地區扶輪社官方網站 職業服務 CAREER SERVICES 歡迎加入扶輪 JOIN ROTARY 3461 扶輪基金 ROTARY FUND 最新消息 查看全部 &#8249; &#8250; 近期活動 扶輪焦點領域與重點計畫 海報 七大焦點領域 &#8250; 全球獎學金 &#8250; 地區扶輪日 &#8250; 2026 RYLA 青少年領袖獎訓練營 &#8250; 扶輪影音專區 贊助單位 國際扶輪第3461地區總監辦公室聯絡資訊 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 傳啓資訊股份有限公司 AI設計 本網站使用 Cookie 以提供更好的瀏覽體驗。您繼續使用本網站，即表示您同意本網站依據條款使用 Cookie。 我知道了 TOP` },
    { title: "最新消息", url: "news.html",
      text: `最新消息 | 國際扶輪第3461地區 最新消息 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "總監 DG Sunny 蔡陽明", url: "governor.html",
      text: `總監 DG Sunny | 國際扶輪第3461地區 👤 '" /> 2025 – 2026 年度總監 蔡陽明 Sunny 夫人 李春月 2025–26 年度主題 Unite for Good 讓我們一起 FUN 轉世界 個人簡介 扶輪資歷 地區經歷 📖 個人簡介 成長背景 民國47年我出生於台中市沙鹿區西勢里的農家，西勢里位於大肚山台地上，屬於農業區旱地，童年記憶中，每天歡樂的在田埂間奔跑，池塘中嬉戲，家裡從事農業耕種，例如：番薯（地瓜）、甘蔗、高粱、荔枝的作物，當然也豢養了黃牛、母豬、小豬、雞、鴨、鵝、火雞等各種家禽，非常熱鬧；日出而作，日落而息的鄉村生活，也形塑了我腳踏實地，樂觀進取的個性；雖然物質不豐富，卻給了我珍貴的精神財富；深深瞭解做人要懂得感恩、珍惜當下，並培養了面對困難勇於面對，樂觀不放棄的處世態度。 求學過程，公司經營 小學就讀村裡的公館國小，然後沙鹿國中、清水高中，大學就讀淡水工商（三專）現改制的真理大學；在學期間成績表現穩定皆名列前茅。畢業後即投入職場上班，民國70年結婚後，即自行創業；期間經營不動產專業代理人、加油站、建設公司；並投資證券公司、游泳池、餐廳等；幾十年來，很幸運的營運投資項目尚可，家庭經濟小康。另外在50歲時，自覺學識不足，想再入學研讀經營管理的課程，因緣際會考上靜宜大學EMBA；在二年求學（研究）期間，認識很多師長，企業界好友，也順利取得碩士學位，也因此人脈的關係，在學校長官的支持，各方好友同學們協助下，創立靜宜大學EMBA校友會，擔任第1、2屆理事長；進而也榮任靜宜大學全球校友總會第11、12屆理事長。 進入扶輪與服務歷程 民國87年，我與青商會OB的好友(CP Lucky、PP Gas、PP Star)暨地方各界企業人士等30多人，在台中港東南社輔導下（輔導代表為PP Fruit）成立台中港東區社。自入社多年來擔任了社內各項職務與工作，受指派即勇於承擔，並使命必達；並榮幸於民國97年擔任本社第11屆社長，這些年來在地區扶輪前輩指導教誨下，個人參與了本社及地區各項服務計畫、募款工作、社友招收、國際服務與聯誼等工作皆全力以赴，成績受大家肯定，也榮幸進而被推選擔任2025-26年度3461地區總監。我深刻體會到，扶輪的服務並不是一次性的付出，而是持續性的陪伴、關心，以「愛」為出發點，讓別人願意和你一起走下去，共同朝向「超我服務」的目標。 未來展望與年度主題「Unite for Good」 2025-26年度，很榮幸能擔任國際扶輪3461地區總監，這是榮耀，更是責任。在這個變動快速、世代交錯的時代，我深信，唯有凝聚力量，才能放大影響。國際扶輪的年度主題「團結行善」(Unite for Good)，這不僅是一句口號，而是一種信念：透過扶輪，我們能跨越背景、性別與年齡，團結每一位社友、扶青、扶少等，甚至社區居民，一起為這個世界做出改變。 展望2025-26年度，我們秉持國際扶輪年度主題「Unite for Good」與3461地區口號「讓我們一起FUN轉世界」，未來一年，我們的地區團隊將聚焦規劃以下目標： 社員成長目標： 1. 成立兩個新社 2. 增加110位新社友 3. 成立兩個衛星社 4. 成立一個扶青社 5. 成立一個扶少團 捐款目標： 1. 保羅‧哈里斯基金捐款達100萬美金 2. 中華扶輪教育基金目標800萬元 3. 認養生命橋樑學生50位 國際服務目標： ・GG申請案達成20至22案 ・每社配合地區獎助金至少45,000元 家庭，是我最堅強的後盾 我最愛的太太Moon（春月），是一位美麗、體貼、細心又低調的伴侶。家庭大小事多由她悉心照料，讓我能無後顧之憂，全心投入社團活動。感謝她的理解與支持，也帶領三位孩子一起參與扶輪、協助各項工作。親愛的家人，我愛你們！ 感謝歷屆前總監、台中港東區社全體社友暨寶眷的提攜指導，尤其感謝2017-18年度提拔我擔任地區秘書長的總監Five。回想民國73年在沙鹿青年商會時，他是會長，我則擔任秘書長，數十年來革命情誼深厚，始終心存感激！ 2025-26年度讓我們攜手營造一個充滿歡樂(Fun)與歸屬感的扶輪社。期望地區各社在規劃活動時，主軸就是「Fun」！讓每一位參與者在愉快、輕鬆的氛圍中，建立彼此之間的參與感與幸福感。 我誠摯期待地區幹部與各社社長們，在新的一年中密切合作、勇於創新、積極學習、提升領導與服務的能量，一起在歡樂中實現各項年度目標！ 2025-26，讓我們一起FUN轉世界，Unite for Good！ 🏅 扶輪社經歷 1998.06.26 台中港東區扶輪社創社社員 1998-1999 理事、糾察主委 1999-2000 公共關係主委、糾察委員 2000-2001 理事、公共關係主委、體育委員 2001-2002 體育主委、職業分類委員 2002-2003 理事、節目主委 2003-2004 理事、職業輔導主委 2004-2005 理事、職業分類委員會主委、職業輔導委員會主委 2005-2006 理事、社員發展委員會主委、高爾夫球委員會主委 2006-2007 理事、副社長、服務計劃委員會主委 2007-2008 理事、社長當選人、社務行政委員會主委 2008-2009 理事、社長 2009-2010 理事、諮詢服務委員會主委 2010-2011 理事、團體交換委員會主委 2011-2012 扶輪青年服務團委員會主委 2012-2013 理事、配合獎助金委員會主委 2013-2014 高爾夫球委員會主委 2014-2015 制度研修委員會主委 2015-2016 理事、扶輪知識委員會主委 2016-2017 STAR 委員會主委、3460 地區副祕書長 2017-2018 世界社區服務委員會主委、中華扶輪教育基金受獎學生照顧社友 2018-2019 團體交換 GSE 主委、中華扶輪教育基金受獎學生照顧社友 2019-2020 中華扶輪教育委員會主委 2020-2021 理事、公共關係形象委員會主委 2021-2022 理事、扶輪基金委員會主委、中華扶輪教育基金受獎學生照顧社友 2022-2023 扶輪資訊委員會主委 🌏 地區經歷 2012-2013 3460 地區扶輪社區服務團主委 2013-2014 地區國際醫療義診委員會副主委 參加「柬埔寨吳哥窟地區捐贈及義診活動」 2015-2016 擔任大肚扶輪社創社輔導委員 2016-2017 3460 地區副祕書長 地區訓練講習會 DTA 擔任講師 地區地帶研習會參加促進委員會 3461 地區副主委 參加社訓練師研習會暨地區引導人訓練研習會(CTTS & DLTS) RIPE 萊斯禮夫婦來台訪問，擔任接待籌備會副主委 2017-2018 3461 地區秘書長 地區社員發展暨公共形象／公共關係研習會講師(DM & PI) 社長當選人訓練研習會講師(PETS)、地區訓練講習會講師(DTA) 參加地區獎助金管理研習會(GMS) 參加地區助理總監暨地區團隊研習會(AG & DTTS) 參加地區扶輪基金研習會(DRFS)、參加社訓練師研習會(CTTS) 參加扶青團地區領導人研習會(RDLTM) 參加「金邊柬埔寨醫療義診活動」 扶輪領導學院 38 期結業 擔任港都社創社輔導顧問 擔任地區秘書長協助地區成立七個新社，並致贈創社基金 2018-2019 地區助理總監 地區訓練會秘書組主持人 地區訓練研習會(DTA)擔任講師 社長當選人訓練研習會(PETS)擔任講師 參加助理總監暨地區團隊訓練研習會(AG & DTTS) 2020-2021 地區服務計畫委員會副主委 2021-2022 地區年會委員會副主委 2022-2023 D 地區助理總監 2023-2024 地區總監提名人 2024-2025 地區總監當選人 蔡陽明 Sunny Tsai 🎓 學歷 靜宜大學 EMBA 企業管理碩士 🏢 現職 盟耕股份有限公司 總經理 迎潤投資股份有限公司 董事長 鉅源投資股份有限公司 董事長 🌐 社區職務 台中市警察局志工大隊副大隊長 台中市消防局清泉分隊顧問團團長 靜宜大學校務顧問 👪 夫人 李春月（Moon） 🏠 所屬社 台中港東區扶輪社 ✈️ 國際扶輪會議經歷 2016 參加曼谷地帶會議 2018 參加加拿大多倫多世界大會 2019 參加德國漢堡世界大會 2020 參加 2020 夏威夷世界年會線上會議 2021 參加 2021 台北世界年會線上會議 2023 參加 2023 高雄地帶會議 2024 參加 2024 新加坡世界年會 🏆 扶輪基金捐獻紀錄 2008-2009 捐保羅哈理斯之友、捐中華扶輪教育基金 2012-2013 捐保羅哈理斯之友 2015-2016 捐保羅哈理斯之友 2016-2017 捐保羅哈理斯之友、捐中華扶輪教育基金 2017-2018 捐 Major Donor Level 1 巨額捐獻、捐中華扶輪教育基金 2018-2019 捐保羅哈理斯之友 2、捐中華扶輪教育基金 2019-2020 捐保羅哈理斯之友 2 2020-2021 捐保羅哈理斯會員、捐保羅哈里斯之友 2021-2022 捐保羅哈理斯會員、捐保羅哈里斯之友、捐中華扶輪教育基金 2022-2023 捐保羅哈理斯會員、捐保羅哈里斯之友、達 Major Donor Level 2、捐中華扶輪教育基金 2023-2024 捐冠名基金 25,000 美金、捐中華扶輪教育基金 📍 總監辦公室 🏠 404台中市北區三民路三段291巷30號2樓 📞 0987-220-088 ✉️ 3461dg2425@gmail.com 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "RI 社長 Francesco Arezzo", url: "ri-president.html",
      text: `RI社長 Francesco Arezzo | 國際扶輪第3461地區 2025 – 2026 年度 RI 社長 弗朗西斯科．阿瑞佐 Francesco Arezzo 2025-26年度國際扶輪社長 義大利拉古薩（Ragusa）扶輪社 義大利拉古薩(Ragusa)扶輪社社員弗朗西斯科．阿瑞佐Francesco Arezzo被國際扶輪理事會推選為2025-26年度國際扶輪社長。阿瑞佐將於7月1日就任社長。 理事會在國際扶輪社長當選人馬里歐．甘瑪葛Mário César Martins de Camargo於6月8日意外辭職後，召開了一次特別會議。在國際扶輪規章與政策指導下，理事會從2023年8月國際扶輪社長提名委員會審議的候選人中選出了這位新的社長當選人。 2025-26年度社長主題(Presidential Message) 仍是2月在2025年國際講習會上宣布的「團結行善」(Unite for Good)，呼籲扶輪社員在這個因政治、地理及意識形態日益分裂的世界中成為團結的力量。透過各項服務專案，扶輪把各種背景、不分種族、宗教及職業的人們凝聚在一起，共同致力於造福社區。 阿瑞佐是一位私人執業的齒顎矯正專科醫師。他活躍於國際事務，是義大利、歐洲及美國齒顎矯正醫師協會會員。他是義大利全國牙醫協會拉古薩省副會長，也是義大利國家信託基金會拉古薩代表團的創始人，並且曾任負責人長達七年。他是馬耳他騎士團的服從奉獻與榮譽騎士。 阿瑞佐加入扶輪超過30年，曾擔任聯合策略計畫委員會副主委、國際扶輪理事、學習引導人以及地區年會社長代表。 阿瑞佐是扶輪基金會的永久基金捐獻人。他的妻子安娜．瑪麗亞．克麗斯修內Anna Maria Criscione是一位觀光旅遊業企業家，育有兩名孩子。 🎬 社長影音 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "70扶輪社 10委員（各社資訊）", url: "clubs.html",
      text: `70扶輪社10扶青 | 國際扶輪第3461地區 70扶輪社 10扶青 國際扶輪第3461地區 · 涵蓋台中、彰化、南投地區 · 25-26年度 70 扶輪社 Rotary Clubs 10 扶青社 Rotaract Clubs 12 扶輪分區 Districts 4 扶青分區 Rotaract Districts A 區 台中市中心北區 3 分區 · 20 扶輪社 A1分區 所有分區介紹 賴玉寶 Polly A.G. 施士塵 Success A.S. 社名／RI核准日期 社長 秘書 台中扶輪社 1995.03.18 蔡三章 Eyes 吳志正 Marketing 台中中央扶輪社 1991.12.12 蘇麗鈴 Lighting 鄭圓圓 Art 台中省都扶輪社 1995.11.28 王志成 Goods 廖朝昕 Power 台中文心扶輪社 2007.03.16 賴品佑 Building 童玉蘭 Janice 台中文教扶輪社 2018.06.08 陳佳瑛 Bonnie 許頌昇 Sung 台中達文西扶輪社 2022.12 陳英傑 Hammer 黃聖傑 Kevin A2分區 所有分區介紹 葉采寧 Kate A.G. 呂明政 Mark A.S. 社名／RI核准日期 社長 秘書 台中中區扶輪社 1979.05.08 謝政洋 Nano 邱瑞鈺 Nima 台中西區扶輪社 1989.06.05 陳冠領 Andrew 鄭文傑 City 台中市政扶輪社 2011.09.28 林建銘 Jamie 蔡明憲 Bill 台中柳川扶輪社 2018.12.21 林柏劭 Lawyer 羅羽童 Helen 台中大新扶輪社 2020.01.16 許晉瑋 Jim 葉偉勝 Wilson 台中中英扶輪社 2023.08.23 黃小娟 Maple 蕭淑芬 Fendi 台中高爾夫扶輪社 2024.11.01 蔡瀚德 Stroller 白金隆 Charles A3分區 所有分區介紹 劉界東 Morti A.G. 石翔升 Tea Stone A.S. 社名／RI核准日期 社長 秘書 台中大屯扶輪社 1983.02.28 謝溫國 DJ 楊家勳 BBQ 台中大同扶輪社 1988.12.28 劉恩杰 Chef 林仁淯 Jerry 台中中州扶輪社 1997.10.29 柯銘哲 Air 周明政 Calvin 台中大光扶輪社 2016.11.16 莊富翔 Louis 周莛女含 Angel 台中向上扶輪社 2018.03.06 黃照明 Paris 何孟瑾 Lorie 台中朝富扶輪社 2022.12 熊亞萍 Kuma 朱英凱 Design 台中羽球扶輪社 2025.01.18 何明松 Leo 廖英豪 Terry B 區 台中市東南區 3 分區 · 19 扶輪社 B1分區 所有分區介紹 陳梓銘 Webb A.G. 朱峻毅 Mario A.S. 社名／RI核准日期 社長 秘書 台中東南扶輪社 1968.10.14 蔡進鍇 Simon 范志來 Vincent 台中中興扶輪社 1989.05.23 駱銘堃 Camel 廖泰傑 Terry 台中東興扶輪社 1999.01.13 李正同 Water 賴宏瑋 Henry 台中台美扶輪社 2003.03.25 李佩璇 Tax 曾薇智 Vicky 台中台興扶輪社 2014.08.01 楊承皓 Hao 鄭為仁 Power 台中曙光扶輪社 2024.02.08 陳智鴻 Wolf 何秉宸 Jason 台中高美扶輪社 2024.03.25 黃聖心 ESG 李阡翔 Bell B2分區 所有分區介紹 蔡銘座 Archi A.G. 賴明興 Star A.S. 社名／RI核准日期 社長 秘書 台中東區扶輪社 1983.02.23 林戴啓 TC 何本立 Nice 台中東北扶輪社 1996.01.17 黃培展 Johnny 陳泰源 Terry 台中東友扶輪社 1997.02.26 張清權 Office 廖福禎 JP Home 台中惠中扶輪社 2018.06.08 郭鳳玉 Jade 王子揚 Yong 台中東昇扶輪社 2018.07.27 王雲以 Iri 戴祖亮 Archi 台中玉山扶輪社 2020.09.20 陳忠延 Johnny 林永裕 Gary B3分區 所有分區介紹 翁政宏 Angelo A.G. 王正杏 Saint A.S. 社名／RI核准日期 社長 秘書 台中南區扶輪社 1987.01.20 林春進 Chin 吳豐裕 Bert 台中南門扶輪社 1994.10.31 陳慶璋 Star 何國禎 Hope 台中惠來扶輪社 2009.12.04 吳哲璁 Print 陳志銘 Poly 台中南光扶輪社 2013.11.27 張采緹 Angel 謝依潔 Jessie 台中馬拉松扶輪社 2017.10.20 蔡欣儒 Filter 王信烜 Think 台中天元扶輪社 2020.03.09 許鈴娟 Coco 林佩君 Smile C 區 豐原、大雅地區 3 分區 · 15 扶輪社 C1分區 所有分區介紹 張喜盛 Tony A.G. 邱居亮 Paint A.S. 社名／RI核准日期 社長 秘書 豐原扶輪社 1961.04.24 張閣位 Mentor 廖興邦 Daikin 東勢扶輪社 1970.09.14 劉發成 Sdada 黃興舒 Health 后里扶輪社 1994.02.10 陳志祥 Mixer 蘇世偉 Jackal 神岡扶輪社 1998.10.21 林殷世 Lawyer 王幼桃 YoYo 石岡扶輪社 2003.03.08 王繹傑 D.J 宋尚儒 Song C2分區 所有分區介紹 朱鎮正 H-Beam A.G. 陳仲廉 Chen A.S. 社名／RI核准日期 社長 秘書 豐原西南扶輪社 1982.08.02 林益源 Diamond 沈丕猷 Insurance 豐原北區扶輪社 1986.04.14 陳大曦 Paint 秦學偉 Auto 豐原中央扶輪社 1996.04.23 林佩芬 Kathy Wine 包于蕙 Lisa 潭子扶輪社 1997.01.22 林忠仁 Design 林泳驗 Casting C3分區 所有分區介紹 林金成 Joint A.G. 李仁傑 Tim A.S. 社名／RI核准日期 社長 秘書 豐原西北扶輪社 1992.12.26 藍宸睿 Breaker 陳嘉文 Lawyer 大雅扶輪社 1997.02.26 錢錦輝 Auto 劉聖文 Sam 豐原富春扶輪社 1998.05.27 陳冠文 Rich 黃智揚 Wales 豐原東區扶輪社 1998.05.27 江耿碩 Box 陳坤和 Cowboy 台中山海屯扶輪社 2018.03.02 徐碧琴 Gina 趙雅萍 Grace 台中潭雅神扶輪社 2018.03.09 張瓔元 HR 李景浩 Dentist D 區 台中港、大甲、苑裡地區 3 分區 · 16 扶輪社 D1分區 所有分區介紹 林政杰 Bento A.G. 張世鴻 CNC A.S. 社名／RI核准日期 社長 秘書 台中港區扶輪社 1971.03.24 蔣翼隆 Allen 楊志鴻 Life 台中港北區扶輪社 1986.05.09 顏子清 Truck 許金龍 Allen 台中港亞太扶輪社 1996.03.01 葉沂凱 House 林富美 Fu-Mei 台中港西濱扶輪社 2014.12.31 王勤惠 Bernice 王予宥 Yumi D2分區 所有分區介紹 陳榮富 Archi A.G. 陳政宏 Lagis A.S. 社名／RI核准日期 社長 秘書 大甲扶輪社 1973.10.02 紀崇楠 Daniel 陳森杰 Kilin 苑裡扶輪社 1976.06.24 吳閔逢 Johnson 江柏穎 Carton 大甲北區扶輪社 1985.03.07 高永鋒 Kao Sir 林國勝 Jr. 大甲中央扶輪社 1991.11.18 蔣德勇 Paper 張正明 Akira 大甲百齡扶輪社 2005.02.23 鄭采琳 Irene 葉慧珠 Joy D3分區 所有分區介紹 林輝煌 Machine A.G. 林志隆 Lyon A.S. 社名／RI核准日期 社長 秘書 台中港東南扶輪社 1979.02.22 巫兆文 Hotel 何炳煌 Globe 台中港西南扶輪社 1987.05.28 王志維 Iron-Man 溫堂埏 Safe 台中港中區扶輪社 1992.01.14 陳貝展 Can Ban 張志名 Walf 台中港東區扶輪社 1998.06.30 林正治 Villa 林世修 Jason 台中港中央扶輪社 2008.10.10 林政孝 Andy Lin 蔡政倫 Kanban 大肚扶輪社 2016.03.18 溫正隆 Along 劉潤琳 Data 台中港都扶輪社 2017.11.21 陳柏霖 Polin 胡錦芳 Hugo 扶青社 Rotaract Clubs 4 分區 · 10 扶青社 FA 分區 扶青社資訊 FB 分區 扶青社資訊 FC 分區 扶青社資訊 FD 分區 扶青社資訊 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "地區組織名錄（地區組織架構）", url: "directory.html",
      text: `地區組織名錄 | 國際扶輪第3461地區 地 區 組 織 名 錄 District 3461 · 2025–2026 年度 組織分類 地區總監顧問 10 地區諮詢委員會 19 地區助理總監團隊 8 分區助理總監 12 分區副秘書長 12 地區秘書處 17 地區財務法務 6 地區總監辦公室 7 地區寶眷委員會 23 地區親睦委員會 29 地區年會委員會 37 年會總務委員會 12 年會議事委員會 11 年會接待委員會 17 年會活動委員會 15 年會服務委員會 13 年會節目委員會 9 地區總監月刊編輯委員會 45 地區學習委員會 12 地區特別委員會 6 地區DEI推廣委員會 24 地區基金與學習院 11 地區體育藝文委員會 21 地區社區服務委員會 21 特別委員會(國際服務) 24 特別委員會(基金學術) 26 地區扶輪基金委員會 21 地區社務行政委員會 46 地區社員委員會 30 地區公共形象委員會 28 地區服務計畫委員會 55 地區社區與職業服務 14 地區扶輪之子委員會 10 地區國際服務委員會 23 地區其他服務委員會 14 地區新世代委員會(RYE) 48 地區Rotaract委員會 14 地區Interact委員會 26 地區RYLA委員會 32 地區扶輪公益網委員會 28 地區生命橋樑助學計畫 29 地區新世代其他委員會 24 找不到符合「 」的結果 地區總監顧問 共 10 位 地區諮詢委員會 共 19 位 地區助理總監團隊 共 8 位 分區助理總監 共 12 位 分區副秘書長 共 12 位 地區秘書處 共 17 位 地區財務法務 共 6 位 地區總監辦公室 共 7 位 地區寶眷委員會 共 23 位 地區親睦委員會 共 29 位 地區年會委員會 共 37 位 地區年會總務委員會 共 12 位 地區年會議事委員會 共 11 位 地區年會接待委員會 共 17 位 地區年會活動委員會 共 15 位 地區年會服務委員會 共 13 位 地區年會節目委員會 共 9 位 地區總監月刊編輯委員會 共 45 位 地區學習委員會 共 12 位 地區特別委員會 共 6 位 地區DEI推廣委員會 共 24 位 地區基金與學習院 共 11 位 地區體育藝文委員會 共 21 位 地區社區服務委員會 共 21 位 地區特別委員會（國際服務） 共 24 位 地區扶輪基金委員會 共 21 位 地區特別委員會（基金學術） 共 26 位 地區社員委員會 共 30 位 地區社務行政委員會 共 46 位 地區公共形象委員會 共 28 位 地區服務計畫委員會 共 55 位 地區社區與職業服務 共 14 位 地區扶輪之子委員會 共 10 位 地區國際服務委員會 共 23 位 地區其他服務委員會 共 14 位 地區新世代委員會（RYE） 共 48 位 地區扶輪青年服務社 Rotaract 委員會 共 14 位 地區 Interact 委員會暨扶少年會 共 26 位 地區扶輪青少年領袖獎 RYLA 委員會 共 32 位 地區扶輪公益網委員會 共 28 位 地區生命橋樑助學計畫委員會 共 29 位 地區新世代其他委員會 共 24 位 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "七大焦點領域", url: "focus-areas.html",
      text: `七大焦點領域 · 國際扶輪 D3461 Seven Areas of Focus 國際扶輪基金七大焦點領域 Rotary Foundation — Areas of Focus 宣導和平 Promoting Peace 預防及治療疾病 Fighting Disease 清潔水資源及衛生 Providing Clean Water 婦幼健康 Saving Mothers and Children 基本教育及識字 Supporting Education 經濟及社區發展 Growing Local Economies 支持環境 Supporting the Environment 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "扶輪介紹", url: "rotary-intro.html",
      text: `扶輪介紹 | 國際扶輪第3461地區 Rotary International · Since 1905 扶 輪 介 紹 由事業、專業及社區領導人所組成的世界組織，提供人道服務、鼓勵崇高道德標準、協助建立世界親善與和平。 ✦ 超我服務 · Service Above Self ✦ Scroll 35,076 全球扶輪社 1,217,996 全球社友人數 200+ 涵蓋國家及地域 547 地區數 About Rotary 扶 輪 簡 介 扶輪（Rotary）是一個由事業、專業及社區領導人所組成的世界組織，此一組織提供人道服務、在所有職業鼓勵崇高的道德標準、並協助在世界建立親善及和平。依 2015 年 12 月 31 日止之統計，全世界共有 35,076 個扶輪社，1,217,996 名社友，分佈在全球超過 200 以上的國家及地域，共劃分為 547 個地區。 扶輪的主要目標是服務──在社區、在工作場所、以及在世界各地。扶輪社員辦理許多社區服務計劃來處理今天許多最關鍵的問題，例如瀕臨危險的兒童、貧窮及飢餓、環境、文盲、及暴力。扶輪的座右銘是 超我服務（Service Above Self） 。 People of Action Global Impact · PolioPlus 全 球 根 除 小 兒 麻 痹 全世界所有扶輪社員團結起來，共同推行全球根除小兒麻痹運動，並提供龐大義工大軍在世界各地協助推廣全國免疫日。 2.4億 美元籌款 1980年代，扶輪社員籌募龐大資金，為全世界兒童接種疫苗，展現全球行動力。 12億+ 美元承諾捐助 透過 PolioPlus Program，扶輪承諾捐助直至全球證實根除小兒麻痹為止。 200+ 國家義工行動 扶輪義工大軍遍佈全球，在流行小兒麻痹的國家推廣並協助舉行全國免疫日。 The Rotary Foundation 扶 輪 基 金 會 國際扶輪的扶輪基金會（The Rotary Foundation）是一個非營利法人，透過國際性的人道服務計畫及教育和文化交流來促進世界了解。 它完全靠來自扶輪社員及具有相同願景之人士的自願捐獻來維持。自從 1947 年以來，扶輪基金會已經頒發超過 18 億美元 的人道及教育獎助金。 The Rotary Foundation Definition 扶 輪 定 義 扶輪是結合全世界事業及專業的領導人士的一種組織，提供博愛的服務，在職業方面鼓勵崇高的道德標準，並幫助建立世界的親善與和平。 超我服務 SERVICE ABOVE SELF Mission & Purpose 扶 輪 宗 旨 扶輪之宗旨在於鼓勵並培養以服務之理想為可貴事業之基礎，尤其著重於鼓勵並培養： 一 藉增廣相識為擴展服務之機會。 二 在各種事業及專業中提高道德之標準；認識一切有益於社會的職業之價值；及每一扶輪社員應尊重其本身之職業藉以服務社會。 三 每一社員能以服務之理想應用於其個人、事業及社會之生活。 四 透過結合具有服務之理想之各種事業及專業人士，以世界性之聯誼，增進國際間之瞭解、親善與和平。 Taiwan Rotary 台 灣 扶 輪 台灣扶輪社員為服務自己的社區及國際社會，更有非凡奉獻。他們參與及主辦國內外各種服務計畫，贊助青少年交換、照顧殘障孤苦貧老、提供獎學金、捐血捐書捐救護車及捐建學校、賑濟及支援災民重建生活、舉辦義診、培養青年領導技能、提升職業道德。 台灣對扶輪基金會的捐獻金額，在國際間時常名列前茅，屬一屬二。 🇹🇼 台灣扶輪現況（至2016年5月） 7 地區數 743 扶輪社 34,431 社友 198 歷屆總監 Taiwan Rotary 總監辦公室：404台中市北區三民路三段291巷30號2樓 辦公室電話：0987-220-088 Email：3461dg2425@gmail.com ©2026 Rotary扶輪社3461 | 傳啓資訊股份有限公司 AI設計` },
    { title: "總監月刊", url: "/specialissue",
      text: `總監月刊 · 國際扶輪 D3461 RI 國際扶輪 D3461 Rotary International District 3461 首頁 總監月刊 文件庫 總監月刊 國際扶輪第 3461 地區 · Governor's Monthly 年度選擇 2526年度 2425年度 2324年度 2223年度 2122年度 2025–26 年度 RI 總監月刊 國際扶輪 D3461 全螢幕 Drive ✕ ← → 鍵翻頁 · 拖曳翻頁` },
    { title: "年度地區重要工作目標 Annual Goals", url: "annual-goals.html",
      text: `年度地區重要工作目標 2025-2026 Annual Goals 國際扶輪第3461地區 總監工作目標與推動計畫 優先事項 增加影響力 擴展觸及 促使參與者投入 增強適應能力 扶輪基金 捐獻目標90萬美金 EREY社 AKS捐獻 鉅額捐獻 冠名基金 2.5萬美金 社員成長 目標160人以上 創立2個新社 衛星社 扶少圍 扶青社 服務計畫 生命橋樑助學計劃 50位學生 扶輪之子十週年 全球獎助金 肺癌篩查 消除C肝 菲律賓醫療義診 帛琉VTT 環境服務 保護淡水 賦權女孩 扶輪公益網` },
    { title: "地區行事曆 District Calendar", url: "calendar.html",
      text: `地區行事曆 District 3461 Calendar 國際扶輪3461地區 2025-2026年度重要活動一覽 掌握地區動態不錯過任何精彩活動 地區重要活動 日期 活動內容 舉辦地點 主辦社 Google Calendar 線上行事曆 即時同步地區最新活動資訊 加入Google日曆追蹤` },
    { title: "地區年會專區 District Conference", url: "conference.html",
      text: `地區年會專區 DISTRICT CONFERENCE 國際扶輪第3461地區 歷屆年會精彩回顧 年會 地區年會` },
    { title: "總監當選人 廖勝揮 Lighting Governor-Elect", url: "governor-elect.html",
      text: `總監當選人 總監提名人 廖勝揮 Lighting 夫人 蘇麗鈴 台中中央扶輪社 2025-26 社長 Unite for Good 讓我們一起FUN轉世界 學歷 雲林縣私立正心中學 台北市市立建國中學 國立成功大學機械系 現職 愛瑪瑞公司董事長 博士韋爾公司董事長 良盛廈門公司董事長 私立弘文中學董事長 雲林縣同鄉會副理事長 台中市民防總隊義勇警察大隊副大隊長 扶輪社經歷 2005.03.04 台中扶輪社入社 社長 2019-2020 地區扶輪之子主委 地區年會秘書長 A區助理總監 保羅哈里斯之友 巨額捐獻 Major Donor Level 1 扶輪之子 生命橋樑獎學金 中華扶輪教育獎學金` },
    { title: "Interact 扶少團", url: "interact.html",
      text: `Interact 扶少團 3461地區扶少團 台中一中扶少團 台中二中扶少團 台中高工扶少團 台中東南扶少團 台中女中 台中南門扶少團 台中家商 台中台美扶少團 明道國際部 台中大光扶少團 興大附農 新民高中扶少團 文華扶少團 曉明文心扶少團 東大附中扶少團 華盛頓高中扶少團 中港高中扶少團 中港西濱 清水高中扶少團 沙鹿高工扶少團 大肚扶少團 潭子扶少團 弘文高中 豐原高商扶少團 豐原高中扶少團 甲中扶少團 立人扶少團 致用高中扶少團 扶少團介紹 12歲至18歲青少年 Interactor 社區服務 國際了解 每月聚會兩次 服務計畫 領導能力 中等教育學校` },
    { title: "國際年會 International Convention", url: "international-convention.html",
      text: `國際年會 Rotary International Convention 台北 TAIPEI 2026 13-17 JUNE 2026 扶輪國際年會 台北年會` },
    { title: "NGSE 新世代服務交換", url: "ngse.html",
      text: `NGSE 新世代服務交換 New Generations Service Exchange 國際扶輪第3461地區 青年 服務交換` },
    { title: "RI 現況 Rotary International Status", url: "ri-current.html",
      text: `RI現況 Rotary International 國際扶輪 組織分成扶輪社 地區與國際三種階層 35000個扶輪社 35000+ 全球扶輪社 1200000+ 全球社友人數 530+ 國際扶輪地區 200+ 涵蓋國家及地域 三層組織架構 Level 01 扶輪社 Rotary Club 模範扶輪社章程 Level 02 地區 District 530個左右國際扶輪地區 地區總監 助理總監 Level 03 國際扶輪 Rotary International 理事會 19名理事 社長 社長當選人 秘書處 740辦事員 8全球區域辦事處 1905創立年份 伊文斯敦 芝加哥 阿根廷 澳大利亞 巴西 印度 日本 韓國 瑞士 英國` },
    { title: "Rotaract 扶青社", url: "rotaract.html",
      text: `Rotaract 扶青社 國際扶輪第3461地區 3461地區扶青社 台中扶青社 東南扶青社 中山線扶青社 大屯扶青社 中區扶青社 中興扶青社 市政扶青社 省都扶青社 惠來扶青社 天元扶青社 宗旨 讓青年透過積極參與社區及國際服務引發正向改變 透過專業培養領導技巧 國際觀 促進世界和平 文化理解 社區服務 國際服務 專業人脈 終身友誼 超我服務 Purpose community international service leadership skills global perspective world peace cultural understanding` },
    { title: "RYLA 扶輪青年領袖獎研習營", url: "ryla.html",
      text: `RYLA 青年領袖營 Rotary Youth Leadership Awards 國際扶輪青年領袖獎研習營 扶輪為青年所成立的建構性計畫 領導潛力 激發與培養社區青年領導潛能 優秀的公民素質 3天培訓課程 增進領導技巧 培養及加強自信 結交新朋友 職場資訊 社區領導人 參加資格 年滿18至26歲 對發展領袖精神及能力有興趣 精通中文` },
    { title: "RYE 扶輪青少年交換", url: "rye.html",
      text: `RYE 扶輪青少年交換 Rotary Youth Exchange 國際扶輪第3461地區 青少年交換 D3461 RYE官方網站` },
    { title: "扶輪標誌影片", url: "rotary-logo.html",
      text: `扶輪標誌 Rotary Logo 扶輪齒輪標誌 介紹影片` },
  ];

  /* ── 從 localStorage 動態取得搜尋資料 ── */
  function _ls(key) {
    try { return JSON.parse(localStorage.getItem('r3461_' + key) || '[]'); } catch { return []; }
  }

  function buildDynamicIndex() {
    const items = [];

    /* 最新消息 */
    _ls('news').forEach(n => {
      items.push({
        title: n.title || '',
        url: 'news.html',
        text: (n.title || '') + ' ' + (n.content || '') + ' ' + (n.date || ''),
        tag: '最新消息',
        date: n.date || '',
      });
    });

    /* 近期活動 */
    _ls('activities').forEach(a => {
      items.push({
        title: a.name || '',
        url: a.url || 'index.html',
        text: (a.name || '') + ' ' + (a.location || '') + ' ' + (a.month || '') + ' ' + (a.year || ''),
        tag: '近期活動',
      });
    });

    /* 影片 */
    _ls('videos').forEach(v => {
      items.push({
        title: v.title || '',
        url: 'index.html#media',
        text: (v.title || ''),
        tag: '影音',
      });
    });

    /* 月刊 */
    const monthly = (() => { try { return JSON.parse(localStorage.getItem('r3461_monthly') || '{}'); } catch { return {}; } })();
    Object.values(monthly).forEach(yr => {
      (yr.issues || []).forEach(issue => {
        items.push({
          title: '總監月刊 ' + (issue.month || issue.no || ''),
          url: 'governor-monthly.html',
          text: '總監月刊 ' + (issue.month || '') + ' ' + (issue.no || ''),
          tag: '總監月刊',
        });
      });
    });

    return items;
  }

  /* ── 搜尋邏輯 ── */
  function search(query) {
    if (!query || query.trim().length < 1) return [];
    const kws = query.trim().toLowerCase().split(/\s+/);
    const results = [];

    const allItems = [
      ...STATIC_PAGES.map(p => ({ ...p, tag: '頁面' })),
      ...buildDynamicIndex(),
    ];

    allItems.forEach(item => {
      const haystack = (item.title + ' ' + item.text).toLowerCase();
      const score = kws.filter(k => haystack.includes(k)).length;
      if (score > 0) {
        // Extract snippet around first match
        const firstKw = kws.find(k => haystack.includes(k));
        const idx = haystack.indexOf(firstKw);
        const start = Math.max(0, idx - 40);
        const rawText = (item.title + ' ' + item.text);
        const snippet = rawText.substring(start, start + 120).replace(/\s+/g, ' ');
        results.push({ ...item, score, snippet });
      }
    });

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 30);
  }

  /* ── 高亮關鍵字 ── */
  function highlight(text, query) {
    const kws = query.trim().split(/\s+/).filter(Boolean);
    let result = _esc(text);
    kws.forEach(k => {
      const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      result = result.replace(re, m => `<mark>${m}</mark>`);
    });
    return result;
  }

  function _esc(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* ── 建立 UI ── */
  function injectUI() {
    // CSS
    const style = document.createElement('style');
    style.textContent = `
      .search-fab {
        position: fixed; right: 20px; bottom: 148px;
        width: 50px; height: 50px;
        background: var(--primary, #1a458b);
        color: #fff; border: none; border-radius: 50%;
        font-size: 20px; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        z-index: 1500;
        opacity: 0; pointer-events: none;
        transition: opacity 0.3s, background 0.2s, transform 0.15s;
      }
      .search-fab.visible { opacity: 1; pointer-events: all; }
      .search-fab:hover { background: #14388a; transform: scale(1.1); }

      /* Search overlay */
      .search-overlay {
        display: none; position: fixed; inset: 0;
        background: rgba(10,20,40,0.7);
        backdrop-filter: blur(6px);
        z-index: 9000;
        align-items: flex-start; justify-content: center;
        padding-top: 80px;
      }
      .search-overlay.open { display: flex; }

      .search-box {
        background: #fff; border-radius: 18px;
        width: 680px; max-width: 94vw;
        max-height: 80vh;
        display: flex; flex-direction: column;
        box-shadow: 0 24px 80px rgba(0,0,0,0.3);
        overflow: hidden;
        animation: searchIn 0.22s ease;
      }
      @keyframes searchIn {
        from { opacity:0; transform: translateY(-20px) scale(0.97); }
        to   { opacity:1; transform: none; }
      }

      .search-header {
        display: flex; align-items: center; gap: 12px;
        padding: 18px 20px 14px;
        border-bottom: 1px solid #f0f0f0;
      }
      .search-header svg { flex-shrink: 0; color: #888; }
      .search-input {
        flex: 1; border: none; outline: none;
        font-size: 18px; color: #222;
        font-family: inherit;
      }
      .search-input::placeholder { color: #bbb; }
      .search-close {
        width: 32px; height: 32px;
        background: #f0f0f0; border: none;
        border-radius: 50%; font-size: 18px;
        cursor: pointer; display: flex;
        align-items: center; justify-content: center;
        color: #666; flex-shrink: 0;
        transition: background 0.15s;
      }
      .search-close:hover { background: #e0e0e0; }

      .search-results {
        overflow-y: auto; flex: 1;
        padding: 8px 0;
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.15) transparent;
      }

      .search-empty {
        text-align: center; padding: 40px 20px;
        color: #aaa; font-size: 14px;
      }

      .search-result-item {
        display: block; padding: 14px 20px;
        border-bottom: 1px solid #f5f5f5;
        text-decoration: none; color: inherit;
        transition: background 0.15s;
        cursor: pointer;
      }
      .search-result-item:last-child { border-bottom: none; }
      .search-result-item:hover { background: #f7f9ff; }

      .sri-top {
        display: flex; align-items: center; gap: 8px;
        margin-bottom: 4px;
      }
      .sri-tag {
        font-size: 10px; font-weight: 700;
        background: var(--primary, #1a458b); color: #fff;
        padding: 2px 7px; border-radius: 10px;
        flex-shrink: 0;
      }
      .sri-title {
        font-size: 15px; font-weight: 600;
        color: var(--primary, #1a458b);
      }
      .sri-snippet {
        font-size: 13px; color: #666;
        line-height: 1.6;
        display: -webkit-box; -webkit-line-clamp: 2;
        -webkit-box-orient: vertical; overflow: hidden;
      }
      .sri-snippet mark {
        background: #fff3cd; color: #333;
        border-radius: 2px; padding: 0 1px;
      }
      .search-count {
        font-size: 12px; color: #999;
        padding: 6px 20px 2px;
      }
    `;
    document.head.appendChild(style);

    // Overlay HTML
    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.id = 'searchOverlay';
    overlay.innerHTML = `
      <div class="search-box">
        <div class="search-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input class="search-input" id="searchInput" placeholder="搜尋全站內容…" autocomplete="off" />
          <button class="search-close" id="searchClose">✕</button>
        </div>
        <div class="search-results" id="searchResults">
          <div class="search-empty">輸入關鍵字搜尋首頁及各內頁內容</div>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    // FAB button
    const fab = document.createElement('button');
    fab.className = 'search-fab';
    fab.id = 'searchFab';
    fab.setAttribute('aria-label', '全站搜尋');
    fab.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>`;
    document.body.appendChild(fab);

    // TOP button: move up to make room
    const goTop = document.getElementById('goTop');
    if (goTop) goTop.style.bottom = '80px';

    /* ── Events ── */
    let debounceTimer;
    const LAST_QUERY_KEY = 'r3461_last_search';

    function openSearch() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const input = document.getElementById('searchInput');
      // 永遠還原上次搜尋記錄
      const lastQuery = sessionStorage.getItem(LAST_QUERY_KEY) || '';
      if (lastQuery) {
        input.value = lastQuery;
        renderResults(lastQuery);
      }
      setTimeout(() => { input.focus(); input.select(); }, 50);
    }

    function closeSearch() {
      // 記錄當下搜尋詞
      const q = document.getElementById('searchInput').value;
      if (q.trim()) sessionStorage.setItem(LAST_QUERY_KEY, q);
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    fab.addEventListener('click', openSearch);
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

    document.getElementById('searchInput').addEventListener('input', function () {
      clearTimeout(debounceTimer);
      // 即時儲存，不等關閉
      if (this.value.trim()) sessionStorage.setItem(LAST_QUERY_KEY, this.value);
      debounceTimer = setTimeout(() => renderResults(this.value), 200);
    });

    function renderResults(query) {
      const container = document.getElementById('searchResults');
      if (!query.trim()) {
        container.innerHTML = '<div class="search-empty">輸入關鍵字搜尋首頁及各內頁內容</div>';
        return;
      }
      const results = search(query);
      if (!results.length) {
        container.innerHTML = `<div class="search-empty">找不到「${_esc(query)}」的相關內容</div>`;
        return;
      }
      container.innerHTML = `<div class="search-count">找到 ${results.length} 筆結果</div>` +
        results.map(r => `
          <a class="search-result-item" href="${_esc(r.url)}">
            <div class="sri-top">
              <span class="sri-tag">${_esc(r.tag || '頁面')}</span>
              <span class="sri-title">${highlight(r.title, query)}</span>
            </div>
            <div class="sri-snippet">…${highlight(r.snippet || '', query)}…</div>
          </a>`).join('');
    }

    /* ── TOP 按鈕（若頁面本身沒有則注入）── */
    if (!document.getElementById('goTop')) {
      const goTopBtn = document.createElement('button');
      goTopBtn.id = 'goTop';
      goTopBtn.setAttribute('aria-label', '回到頂部');
      goTopBtn.style.cssText = [
        'position:fixed;right:20px;bottom:80px',
        'width:50px;height:50px',
        'background:rgba(0,0,0,0.7);color:#fff',
        'border:none;border-radius:50px;cursor:pointer',
        'z-index:1500;font-size:11px;font-weight:700',
        'letter-spacing:0.5px',
        'opacity:0;pointer-events:none',
        'transition:opacity 0.3s,background 0.18s',
        'display:flex;flex-direction:column',
        'align-items:center;justify-content:center;gap:1px',
      ].join(';');
      goTopBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg><span style="font-size:10px">TOP</span>`;
      document.body.appendChild(goTopBtn);
      const showHide = () => {
        const show = window.scrollY > 300;
        goTopBtn.style.opacity = show ? '1' : '0';
        goTopBtn.style.pointerEvents = show ? 'all' : 'none';
      };
      window.addEventListener('scroll', showHide, { passive: true });
      goTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      goTopBtn.addEventListener('mouseenter', () => goTopBtn.style.background = 'var(--primary,#1a458b)');
      goTopBtn.addEventListener('mouseleave', () => goTopBtn.style.background = 'rgba(0,0,0,0.7)');
    }

    /* ── Show/hide FAB on scroll ── */
    window.addEventListener('scroll', () => {
      fab.classList.toggle('visible', window.scrollY > 100);
    }, { passive: true });
    // Also show immediately if already scrolled
    if (window.scrollY > 100) fab.classList.add('visible');

    // Keyboard shortcut: Ctrl/Cmd + K
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectUI);
  } else {
    injectUI();
  }
})();
