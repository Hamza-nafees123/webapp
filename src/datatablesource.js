export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      const imageUrl = params.row.img || 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop';
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={imageUrl} alt="avatar"  />
          {params.row.firstname}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "location",
    headerName: "Geo",
    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userLocationColm = [
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg" style={{display:'flex',alignItems:'center'}}>
          <img className="cellImg" src={params.row.img} alt="avatar" style={{width:'2.5em',height:'2.5em',objectFit:'cover',borderRadius:'50%'}} />
         <p style={{paddingLeft:15,marginBottom:0}}> {params.row.firstname} {params.row.lastName}</p>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "Geo",
    headerName: "Geo",
    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const  BookColmData = [
  { field: "id", headerName: "ID", width: 100 },
  {
    
    field: "Bookname",
    headerName: "Book Name",
    width: 260,
    renderCell: (params) => {
      const imageUrl = params.row.bookCoverImage?.url || 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop';
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={imageUrl} alt="avatar" />
          {params.row.bookTitle}
        </div>
      );
    },
  },
  {
    field: "Category",
    headerName: "Category",
    width: 200,
    renderCell: (params) => {
      const primaryCategory = params.row.primaryCategory ? params.row.primaryCategory.name : 'Unknown';
      const secondaryCategory = params.row.secondaryCategory ? params.row.secondaryCategory.name : 'Unknown';
      return (
        <div className="cellWithImg">
          {primaryCategory} / {secondaryCategory}
        </div>
      );
    },
  },
  {
    field: "series",
    headerName: "Series",
    width: 140,
  },
  {
    field: "bookDownload",
    headerName: "Book Downloods",
    width: 150,
    renderCell: (params) => {
      const value = params.row.bookDownload || 0; // Use 0 if params.row.bookRead is null or undefined
      return (
        <div className="cellWithImg">
          {value}
        </div>
      );
    },
  },
  {
    field: "bookRead",
    headerName: "Book Reads",
    width: 150,
    renderCell: (params) => {
      const value = params.row.bookRead || 0; // Use 0 if params.row.bookRead is null or undefined
      return (
        <div className="cellWithImg">
          {value}
        </div>
      );
    },
  }
  // {
  //   field: "Geo",
  //   headerName: "Geo",
  //   width: 180,
  // },
  
];
//temporary data
export const userRows = [
  {
    id: 1,
    // username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    gender: 'Other',
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry',
   
  },
  {
    id: 2,
    // username: "Jamie Lannister",
    img: "https://www.upwork.com/mc/documents/colorschemeavatar.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    gender: 'Male',
    Geo:'Karachi Pakistan',
    joiningDate:'20-05-2024',
    paymentPlains:'1 month free',
    userMessages:'hey bro how are you',
     firstname:'Harry',
    lastName:'Makfee',
    cancelReason:'I am dissatisfied with the content',
    cancelReasonMess:'i am dissatisfied'
  },
  {
    id: 3,
    // username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    gender: 'Female',
    Geo:'Sindth  Pakistan',
    joiningDate:'12-05-2023',
    paymentPlains:'6 month ',
    userMessages:'hey bro how are you',
    firstname:'Anna',
    lastName:'harry'
  },
  {
    id: 4,
    // username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-02-2023',
    paymentPlains:'1 Year ',
    userMessages:'hey bro how are you',
    firstname:'Harry',
    lastName:'harry'
  },
  {
    id: 5,
    // username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    gender: 'Female',
    Geo:'Sindth  Pakistan',
    joiningDate:'28-06-2024',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Laana',
    lastName:'harry'
  },
  {
    id: 6,
    // username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'6 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 7,
    // username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    gender: "Female",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry',
    cancelReason:'I am dissatisfied with the content',
    cancelReasonMess:'i am dissatisfied'
  },
  {
    id: 8,
    // username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 9,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    gender:" Female",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 10,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 11,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 12,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 13,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 14,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 15,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 16,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },

  {
    id: 17,
    // username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
];
export const BookData = [
  {
    id:1,
    Bookname: "The Reign",
    series:'yes',
    downloods:300,
    Reads:20,
    RedTitleBanner:'Royal Bastard',
    bookcategoryPrimary:'Action',
    bookcategoriesSec:'Romance',
    rating:'2.5',
    img: "https://bucolic-dolphin-9dfca4.netlify.app/static/media/reign.caf7b51f5ab03b7101b6.png",
    authorName:'Fali',
    shortDiscription:'This book is intended for mature audiences only.If darker books are not for you, please do not move forward. After re-adjusting my trigger warning system, I will not be giving any spoilers. Please understand that this is not your run-of-the-mill romance and tough subjects will be discussed in this storyline.This story could include things like rape, kidnapping, abuse, domestic violence, drugs, alcohol abuse, and many other potential triggers.',
    longDiscription:'This book is intended for mature audiences only.If darker books are not for you, please do not move forward. After re-adjusting my trigger warning system, I will not be giving any spoilers. Please understand that this is not your run-of-the-mill romance and tough subjects will be discussed in this storyline.This story could include things like rape, kidnapping, abuse, domestic violence, drugs, alcohol abuse, and many other potential triggers.This book is intended for mature audiences only.If darker books are not for you, please do not move forward. After re-adjusting my trigger warning system, I will not be giving any spoilers. Please understand that this is not your run-of-the-mill romance and tough subjects will be discussed in this storyline.This story could include things like rape, kidnapping, abuse, domestic violence, drugs, alcohol abuse, and many other potential triggers.',
  },
  {
    id:2,
    Bookname: "WHISKEY POISON",
    series:'yes',
    downloods:320,
    Reads:220,
    RedTitleBanner:'Royal Bastard',
    bookcategoryPrimary:'Action',
    bookcategoriesSec:'Romance',
    rating:'2.5',
    img: "https://bucolic-dolphin-9dfca4.netlify.app/static/media/whiskeypoison.2f34f4afb08c9d387466.png",
    authorName:' Nariman',
    shortDiscription:"The hottest man I've ever seen is now my new boss and I'm stuck in a house with him Until one of us cracks I've got debt—yeah, I know, so does everyone else on Planet Earth But the bills I'm paying keep my dad and my grandma alive So it's pretty messed-up for Timofey Viktorov to use them as a threat t keep me under control Not that he cares As a billionaire CEO, he takes no prisoners in the boardroom And as the don of the Viktorov Bratva, he takes no prisoners in real life either Which is why he has no qualms about extorting me into taking his deal Live in my mansion Care for my baby Or suffer the consequences But he's not the only one with an agenda.Timofey has skeletons in his closet—and I'm determined to dig them out.He's just as determined to keep me far away from the secrets of his past.The longer I’m in his house, the tenser things get.Every time we brush past each other in the hallway, something sparks.Every time we cross paths in the night, the ice grows thinner.Sooner or later, it’s going to crack.WHISKEY POISON is Book 1 of the Viktorov Bratva Duet. The storyconcludes in Book 2, WHISKEY PAIN.",
    longDiscription:"The hottest man I've ever seen is now my new boss and I'm stuck in a house with him Until one of us cracks I've got debt—yeah, I know, so does everyone else on Planet Earth But the bills I'm paying keep my dad and my grandma alive So it's pretty messed-up for Timofey Viktorov to use them as a threat t keep me under control Not that he cares As a billionaire CEO, he takes no prisoners in the boardroom And as the don of the Viktorov Bratva, he takes no prisoners in real life either Which is why he has no qualms about extorting me into taking his deal Live in my mansion Care for my baby Or suffer the consequences But he's not the only one with an agenda.Timofey has skeletons in his closet—and I'm determined to dig them out.He's just as determined to keep me far away from the secrets of his past.The longer I’m in his house, the tenser things get.Every time we brush past each other in the hallway, something sparks.Every time we cross paths in the night, the ice grows thinner.Sooner or later, it’s going to crack.WHISKEY POISON is Book 1 of the Viktorov Bratva Duet. The storyconcludes in Book 2, WHISKEY PAIN.",
  },
]
export const allCategory = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Category Name",
    width: 700,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.name}
        </div>
      );
    },
  },
];
export const CatoriesDataobj = [
  {
    id:1,
    CategoryName: " LGBTQ+",
  },
  {
    id:2,
    CategoryName: "Sports",
  },
  {
    id:3,
    CategoryName: "Cowboy",
  },
  {
    id:4,
    CategoryName: "Paranormal",
  },
  {
    id:5,
    CategoryName: "Sci-Fi",
  },
  {
    id:6,
    CategoryName: " Billionaire",
  },
  {
    id:7,
    CategoryName: "Dark 17+",
  },
  {
    id:8,
    CategoryName: "Fairy Tale",
  },
  {
    id:9,
    CategoryName: " Anime 18+",
  },
  {
    id:10,
    CategoryName: "Contemporary",
  },
  {
    id:11,
    CategoryName: "Mafia",
  },

  {
    id:12,
    CategoryName: "Thriller",
  },
  {
    id:13,
    CategoryName: " Historical Romance",
  },
  {
    id:14,
    CategoryName: "Romance",
  },
]
export const AudioBooksData = [
  { field: "id", headerName: "ID", width: 70 },
  {
    
    field: "Bookname",
    headerName: "Book Name",
    width: 270,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.Bookname}
        </div>
      );
    },
  },
  {
    
    field: "AuthorName",
    headerName: "Author Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.authorName}
        </div>
      );
    },
  }, 
  {
    field: "downloods",
    headerName: "Book Downloods",
    width: 200,
  },
  {
    
    field: "BookListen",
    headerName: "Book Listen",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.BookListen}
        </div>
      );
    },
  }, 
];
export const AudioBookDataObj = [
  {
    id:1,
    Bookname: "Bookshops Bonedust",
    downloods:300,
    bookcategoriesSec:'asd',
    bookcategoryPrimary:'primary',
    BookListen:20,
    rating:'2.5',
    img: "https://cdn.sanity.io/images/7g6d2cj1/production/81b67e7af332ce7e4b971bad24c892a114f06448-1000x667.jpg?h=667&q=70&auto=format",
    authorName:'Fali',
    longDiscription:'This book is intended for mature audiences only.If darker books are not for you, please do not move forward. After re-adjusting my trigger warning system, I will not be giving any spoilers. Please understand that this is not your run-of-the-mill romance and tough subjects will be discussed in this storyline.This story could include things like rape, kidnapping, abuse, domestic violence, drugs, alcohol abuse, and many other potential triggers.This book is intended for mature audiences only.If darker books are not for you, please do not move forward. After re-adjusting my trigger warning system, I will not be giving any spoilers. Please understand that this is not your run-of-the-mill romance and tough subjects will be discussed in this storyline.This story could include things like rape, kidnapping, abuse, domestic violence, drugs, alcohol abuse, and many other potential triggers.',
  },
  {
    id:2,
    Bookname: "WHISKEY POISON",
    downloods:320,
    BookListen:220,
    bookcategoriesSec:'asd',
    bookcategoryPrimary:'primary',
    rating:'2.5',
    img: "https://bucolic-dolphin-9dfca4.netlify.app/static/media/whiskeypoison.2f34f4afb08c9d387466.png",
    authorName:' Nariman',
    longDiscription:"The hottest man I've ever seen is now my new boss and I'm stuck in a house with him Until one of us cracks I've got debt—yeah, I know, so does everyone else on Planet Earth But the bills I'm paying keep my dad and my grandma alive So it's pretty messed-up for Timofey Viktorov to use them as a threat t keep me under control Not that he cares As a billionaire CEO, he takes no prisoners in the boardroom And as the don of the Viktorov Bratva, he takes no prisoners in real life either Which is why he has no qualms about extorting me into taking his deal Live in my mansion Care for my baby Or suffer the consequences But he's not the only one with an agenda.Timofey has skeletons in his closet—and I'm determined to dig them out.He's just as determined to keep me far away from the secrets of his past.The longer I’m in his house, the tenser things get.Every time we brush past each other in the hallway, something sparks.Every time we cross paths in the night, the ice grows thinner.Sooner or later, it’s going to crack.WHISKEY POISON is Book 1 of the Viktorov Bratva Duet. The storyconcludes in Book 2, WHISKEY PAIN.",
  },
]
export const paymentPlanData = [
  { field: "id", headerName: "ID", width: 70 },
  {
    
    field: "Payment Plan Name",
    headerName: "Payment Plan Name",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.planName}
        </div>
      );
    },
  }, 
  {
    
    field: "payment Description",
    headerName: "Payment Description",
    width: 450,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.description}
        </div>
      );
    },
  }, 
  {
    
    field: "Cutprice",
    headerName: "Cut Price",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          ${params.row.cutprice}
        </div>
      );
    },
  }, 
  {
    
    field: "Actual Price",
    headerName: "Actual Price",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          ${params.row.actualprice}
        </div>
      );
    },
  },
];
export const paymentPlanDataobj = [
  {
    id:1,
    planName: " 1 Month free (with promo code)",
    cutprice:0,
    actualprice:0,
    description:' UNLIMITED ONLINE READING,'
  },
  {
    id:2,
    planName: "1 Month ",
    cutprice:120,
    actualprice:110,
    description:' UNLIMITED ONLINE READING, 2 BOOKS DOWNLOAD'
  },
  {
    id:3,
    planName: "3 Month ",
    cutprice:20,
    actualprice:102,
    description:' UNLIMITED ONLINE READING, 5 BOOKS DOWNLOAD'
  },
  {
    id:4,
    planName: "6 Months",
    cutprice:140,
    actualprice:200,
    description:' UNLIMITED ONLINE READING, 10 BOOKS DOWNLOAD'
  },
  {
    id:5,
    planName: "1 Year",
    cutprice:120,
    actualprice:230,
    description:' UNLIMITED ONLINE READING,  UNLIMITED BOOKS DOWNLOAD'
  },
  
]
export const CancelUserData = [
  {
    id: 1,
    ip: '103.244.176.31',
    // username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Cancelled",
    email: "1snow@gmail.com",
    gender: 'Other',
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry',
   
  },
  {
    id: 2,
    ip: '103.444.176.11',
    // username: "Jamie Lannister",
    img: "https://www.upwork.com/mc/documents/colorschemeavatar.jpg",
    email: "2snow@gmail.com",
    status: "Cancelled",
    gender: 'Male',
    Geo:'Karachi Pakistan',
    joiningDate:'20-05-2024',
    paymentPlains:'1 month free',
    userMessages:'hey bro how are you',
     firstname:'Harry',
    lastName:'Makfee',
    cancelReason:'I am dissatisfied with the content',
    cancelReasonMess:'i am dissatisfied'
  },
  {
    id: 3,
    // username: "Lannister",
    ip: '103.244.116.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "Cancelled",
    gender: 'Female',
    Geo:'Sindth  Pakistan',
    joiningDate:'12-05-2023',
    paymentPlains:'6 month ',
    userMessages:'hey bro how are you',
    firstname:'Anna',
    lastName:'harry'
  },
  {
    id: 4,
    // username: "Stark",
    ip: '103.244.146.10',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-02-2023',
    paymentPlains:'1 Year ',
    userMessages:'hey bro how are you',
    firstname:'Harry',
    lastName:'harry'
  },
  {
    id: 5,
    // username: "Targaryen",
    ip: '101.244.116.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "Cancelled",
    gender: 'Female',
    Geo:'Sindth  Pakistan',
    joiningDate:'28-06-2024',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Laana',
    lastName:'harry'
  },
  {
    id: 6,
    // username: "Melisandre",
    ip: '103.144.116.09',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'6 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 7,
    // username: "Clifford",
    ip: '103.244.106.01',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "Cancelled",
    gender: "Female",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry',
    cancelReason:'I am dissatisfied with the content',
    cancelReasonMess:'i am dissatisfied'
  },
  {
    id: 8,
    // username: "Frances",
    ip: '113.244.116.10',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Sindth  Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 9,
    // username: "Roxie",
    ip: '133.244.116.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender:" Female",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 10,
    // username: "Roxie",
    ip: '113.212.116.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry'
  },
  {
    id: 11,
    // username: "Roxie",
    ip: '101.244.112.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'ubaid',
    lastName:'harry'
  },
  {
    id: 12,
    // username: "Roxie",
    ip: '101.244.116.10',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'david',
    lastName:'harry'
  },
  {
    id: 13,
    // username: "Roxie",
    ip: '113.244.116.18',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'rubxsol',
    lastName:'harry'
  },
  {
    id: 14,
    // username: "Roxie",
    ip: '109.244.116.11',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'mohsin',
    lastName:'harry'
  },
  {
    id: 15,
    ip: '113.244.116.13',
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'hamza',
    lastName:'harry'
  },
];
export const ContactPage = [
  { field: "id", headerName: "ID", width: 70 },
  {
    
    field: "Name",
    headerName: "Name",
    width: 240,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    
    field: "Date",
    headerName: "Date",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.Date}
        </div>
      );
    },
  }, 
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
 
  {
    field: "Geo",
    headerName: "Geo",
    width: 200,
  },
  // {
    
  //   field: "BookListen",
  //   headerName: "Book Listen",
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         {params.row.BookListen}
  //       </div>
  //     );
  //   },
  // }, 
];
export const ContactPageDataOBJ = [
  {
    id: 1,
    // username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Cancelled",
    email: "1snow@gmail.com",
    gender: 'Other',
    Geo:'Karachi Pakistan',
    Date:'22-05-2023',
    userMessages:'hey bro how are you',
    name:'harry'
   
  },
  {
    id: 2,
    img: "https://www.upwork.com/mc/documents/colorschemeavatar.jpg",
    email: "2snow@gmail.com",
    status: "Cancelled",
    gender: 'Male',
    Geo:'Karachi Pakistan',
    Date:'20-05-2024',
    userMessages:'hey bro how are you',
    name:'harry anna'
  },
  {
    id: 3,
    // username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "Cancelled",
    gender: 'Female',
    Geo:'Sindh  Pakistan',
    Date:'12-05-2023',
    userMessages:'hey bro how are you',
    name:'harry'
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    Date:'22-02-2023',
    userMessages:'hey bro how are you',
    name:'harry'
  },
  {
    id: 5,
    // username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "Cancelled",
    gender: 'Female',
    Geo:'Sindh  Pakistan',
   Date:'28-06-2024',
    
    userMessages:'hey bro how are you',
    name:'harry lana'
  },
  {
    id: 6,
    // username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Sindh  Pakistan',
    Date:'22-05-2023',
    userMessages:'hey bro how are you',
    name:'david'
  },
  
];