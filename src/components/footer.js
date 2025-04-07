import { layout } from "./layout.js";


export const Footer = () => {
  
  if(document.querySelector('footer')){
    return '';
  } 
 
  const el = document.createElement('footer');
  el.classList.add('footer');

  const child = `
      <a class="footer__logo-link">
        <svg class="footer__logo-icon" width="276" height="60" viewBox="0 0 276 60" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M266.593 45.1449C264.543 45.1449 262.77 44.6614 261.274 43.6942C259.777 42.7175 258.619 41.3683 257.799 39.6469C256.989 37.9157 256.584 35.9234 256.584 33.6701C256.584 31.4264 256.989 29.4341 257.799 27.6933C258.619 25.9428 259.749 24.5743 261.188 23.5879C262.637 22.5917 264.31 22.0937 266.207 22.0937C267.398 22.0937 268.547 22.3161 269.653 22.761C270.758 23.1962 271.75 23.8683 272.627 24.7774C273.513 25.6768 274.214 26.8132 274.729 28.1865C275.243 29.5501 275.501 31.1652 275.501 33.0318V34.3084H258.343V32.0308H272.898C272.898 30.5995 272.612 29.3132 272.04 28.172C271.478 27.0211 270.692 26.112 269.681 25.4447C268.68 24.7774 267.522 24.4438 266.207 24.4438C264.815 24.4438 263.59 24.8209 262.532 25.5753C261.474 26.3296 260.645 27.3258 260.044 28.5637C259.453 29.8016 259.153 31.1556 259.143 32.6256V33.9892C259.143 35.759 259.444 37.3064 260.044 38.6314C260.654 39.9467 261.517 40.967 262.632 41.6923C263.747 42.4176 265.068 42.7803 266.593 42.7803C267.632 42.7803 268.542 42.6159 269.324 42.2871C270.115 41.9583 270.777 41.5182 271.311 40.967C271.855 40.406 272.264 39.7919 272.541 39.1246L274.957 39.9225C274.624 40.8606 274.076 41.7262 273.313 42.5192C272.56 43.3122 271.616 43.9505 270.482 44.4341C269.357 44.908 268.061 45.1449 266.593 45.1449Z"
            fill="#0044F0" />
          <path d="M250.979 14.971V44.6809H248.434V14.971H250.979Z" fill="#0044F0" />
          <path
            d="M224.292 53.0366V22.3983H226.766V26.6488H227.066C227.371 25.9815 227.79 25.2997 228.324 24.6033C228.858 23.8973 229.563 23.3026 230.44 22.819C231.327 22.3354 232.442 22.0937 233.786 22.0937C235.597 22.0937 237.18 22.5772 238.533 23.5443C239.896 24.5018 240.954 25.8461 241.707 27.5772C242.47 29.2987 242.851 31.3055 242.851 33.5975C242.851 35.8993 242.47 37.9157 241.707 39.6469C240.954 41.378 239.896 42.7271 238.533 43.6942C237.18 44.6614 235.607 45.1449 233.815 45.1449C232.49 45.1449 231.379 44.9031 230.483 44.4196C229.597 43.936 228.877 43.3412 228.324 42.6353C227.781 41.9196 227.361 41.2233 227.066 40.5463H226.837V53.0366H224.292ZM226.808 33.554C226.808 35.3529 227.071 36.9486 227.595 38.3412C228.129 39.7242 228.891 40.8122 229.883 41.6053C230.884 42.3886 232.094 42.7803 233.514 42.7803C234.973 42.7803 236.203 42.3741 237.203 41.5617C238.214 40.7397 238.981 39.6323 239.505 38.2397C240.039 36.847 240.306 35.2852 240.306 33.554C240.306 31.8422 240.044 30.2997 239.52 28.9264C239.005 27.553 238.242 26.465 237.232 25.6623C236.222 24.8499 234.982 24.4438 233.514 24.4438C232.085 24.4438 230.869 24.8354 229.868 25.6188C228.867 26.3925 228.105 27.466 227.581 28.8393C227.066 30.2029 226.808 31.7745 226.808 33.554Z"
            fill="#0044F0" />
          <path
            d="M209.038 45.1449C207.141 45.1449 205.463 44.6565 204.005 43.6797C202.556 42.7029 201.421 41.3538 200.602 39.6323C199.782 37.9012 199.372 35.9041 199.372 33.641C199.372 31.3587 199.782 29.3519 200.602 27.6207C201.421 25.8799 202.556 24.526 204.005 23.5588C205.463 22.5821 207.141 22.0937 209.038 22.0937C210.935 22.0937 212.608 22.5821 214.056 23.5588C215.505 24.5356 216.64 25.8896 217.459 27.6207C218.289 29.3519 218.703 31.3587 218.703 33.641C218.703 35.9041 218.294 37.9012 217.474 39.6323C216.654 41.3538 215.515 42.7029 214.056 43.6797C212.608 44.6565 210.935 45.1449 209.038 45.1449ZM209.038 42.7803C210.563 42.7803 211.855 42.3645 212.913 41.5327C213.971 40.701 214.771 39.5937 215.315 38.2107C215.868 36.8277 216.144 35.3045 216.144 33.641C216.144 31.9776 215.868 30.4496 215.315 29.0569C214.771 27.6643 213.971 26.5472 212.913 25.7058C211.855 24.8645 210.563 24.4438 209.038 24.4438C207.522 24.4438 206.231 24.8645 205.163 25.7058C204.105 26.5472 203.299 27.6643 202.746 29.0569C202.203 30.4496 201.931 31.9776 201.931 33.641C201.931 35.3045 202.203 36.8277 202.746 38.2107C203.299 39.5937 204.105 40.701 205.163 41.5327C206.221 42.3645 207.513 42.7803 209.038 42.7803Z"
            fill="#0044F0" />
          <path
            d="M185.985 45.1449C183.936 45.1449 182.163 44.6614 180.666 43.6942C179.17 42.7175 178.012 41.3683 177.192 39.6469C176.382 37.9157 175.977 35.9234 175.977 33.6701C175.977 31.4263 176.382 29.4341 177.192 27.6933C178.012 25.9428 179.141 24.5743 180.581 23.5879C182.03 22.5917 183.702 22.0937 185.599 22.0937C186.791 22.0937 187.939 22.3161 189.045 22.761C190.151 23.1962 191.142 23.8683 192.019 24.7774C192.906 25.6768 193.606 26.8132 194.121 28.1865C194.636 29.5501 194.893 31.1652 194.893 33.0318V34.3084H177.735V32.0308H192.291C192.291 30.5995 192.005 29.3132 191.433 28.172C190.871 27.0211 190.084 26.112 189.074 25.4447C188.073 24.7774 186.915 24.4438 185.599 24.4438C184.208 24.4438 182.983 24.8209 181.925 25.5753C180.867 26.3296 180.037 27.3258 179.437 28.5637C178.846 29.8016 178.545 31.1556 178.536 32.6256V33.9892C178.536 35.759 178.836 37.3064 179.437 38.6314C180.047 39.9467 180.909 40.967 182.025 41.6923C183.14 42.4176 184.46 42.7803 185.985 42.7803C187.024 42.7803 187.935 42.6159 188.716 42.2871C189.508 41.9583 190.17 41.5182 190.704 40.967C191.247 40.406 191.657 39.7919 191.933 39.1246L194.35 39.9225C194.016 40.8606 193.468 41.7262 192.706 42.5192C191.953 43.3122 191.009 43.9505 189.875 44.4341C188.75 44.908 187.453 45.1449 185.985 45.1449Z"
            fill="#0044F0" />
          <path
            d="M152.706 44.6809V14.971H162.157C164.236 14.971 165.97 15.3772 167.362 16.1896C168.763 16.9923 169.817 18.0851 170.522 19.4681C171.237 20.8511 171.594 22.4081 171.594 24.1393C171.594 25.8704 171.242 27.4323 170.536 28.825C169.831 30.208 168.782 31.3056 167.391 32.118C165.999 32.9207 164.269 33.3221 162.2 33.3221H154.765V30.8849H162.129C163.664 30.8849 164.936 30.5948 165.947 30.0145C166.957 29.4246 167.71 28.6219 168.206 27.6064C168.711 26.5909 168.964 25.4352 168.964 24.1393C168.964 22.8434 168.711 21.6876 168.206 20.6722C167.71 19.6567 166.952 18.8588 165.932 18.2786C164.922 17.6983 163.64 17.4081 162.086 17.4081H155.38V44.6809H152.706Z"
            fill="#0044F0" />
          <path d="M138.916 14.971V44.6809H130.966V14.971H138.916Z" fill="#0044F0" />
          <path
            d="M102.183 44.6809V14.971H110.133V26.9826H110.534L119.341 14.971H128.607L118.712 28.2012L128.835 44.6809H119.341L112.764 33.5397L110.133 37.0213V44.6809H102.183Z"
            fill="#0044F0" />
          <path
            d="M91.1529 24.2552C91.0766 23.288 90.7192 22.5337 90.0805 21.9921C89.4514 21.4505 88.4934 21.1797 87.2066 21.1797C86.3868 21.1797 85.7148 21.2813 85.1905 21.4844C84.6757 21.6778 84.2945 21.9437 84.0466 22.2822C83.7988 22.6207 83.6701 23.0076 83.6606 23.4428C83.6415 23.8006 83.7035 24.1246 83.8464 24.4147C83.999 24.6952 84.2373 24.9515 84.5614 25.1836C84.8855 25.406 85.3001 25.6091 85.8053 25.7929C86.3105 25.9766 86.9111 26.141 87.6069 26.2861L90.009 26.8083C91.6295 27.1565 93.0164 27.6159 94.1698 28.1865C95.3232 28.7571 96.2669 29.4292 97.0009 30.2029C97.7349 30.9669 98.2735 31.8277 98.6166 32.7851C98.9693 33.7426 99.1504 34.7871 99.16 35.9186C99.1504 37.8722 98.669 39.5259 97.7158 40.8799C96.7626 42.2339 95.3995 43.2639 93.6265 43.9698C91.863 44.6758 89.7421 45.0288 87.2637 45.0288C84.7186 45.0288 82.4976 44.6468 80.6007 43.8828C78.7133 43.1188 77.2454 41.9437 76.1968 40.3577C75.1578 38.7619 74.6336 36.7213 74.624 34.2358H82.1735C82.2212 35.1449 82.4452 35.9089 82.8456 36.5279C83.2459 37.1468 83.8083 37.6159 84.5328 37.935C85.2667 38.2542 86.1389 38.4138 87.1494 38.4138C87.9977 38.4138 88.7079 38.3074 89.2798 38.0946C89.8517 37.8818 90.2855 37.5869 90.581 37.2097C90.8765 36.8325 91.029 36.4022 91.0385 35.9186C91.029 35.464 90.8812 35.0675 90.5953 34.729C90.3188 34.3809 89.8613 34.0714 89.2226 33.8006C88.584 33.5201 87.7213 33.259 86.6346 33.0172L83.7178 32.3789C81.125 31.8083 79.0803 30.8557 77.5838 29.5211C76.0968 28.1768 75.358 26.3441 75.3675 24.023C75.358 22.1372 75.8537 20.4882 76.8546 19.0762C77.865 17.6546 79.2614 16.5472 81.044 15.7542C82.836 14.9611 84.8902 14.5646 87.2066 14.5646C89.5705 14.5646 91.6152 14.966 93.3405 15.7687C95.0659 16.5714 96.3956 17.7029 97.3298 19.1633C98.2735 20.614 98.7501 22.3112 98.7596 24.2552H91.1529Z"
            fill="#0044F0" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.95495 29.7158L47.0115 55.5531L47.0136 55.5543C47.4011 55.7996 47.7363 55.9108 48.0545 55.8553C48.4075 55.7936 48.7134 55.5605 49.0221 55.2635C49.4888 54.8145 50.2271 54.8345 50.6697 55.308C51.1123 55.7815 51.0926 56.5306 50.6259 56.9795C49.9482 57.6314 49.2244 58.0507 48.4498 58.1859C47.6421 58.3269 46.7552 58.1808 45.7697 57.5543L45.763 57.5501L5.69775 31.7071C5.69369 31.7045 5.68967 31.7019 5.68569 31.6992L5.68511 31.6988C4.71166 31.0535 4.20945 30.2979 3.99725 29.4948C3.79363 28.7245 3.86552 27.882 4.16492 26.9847C4.37109 26.3666 5.03321 26.0346 5.64244 26.2439C6.25179 26.4531 6.57891 27.1248 6.37262 27.7429C6.23626 28.1518 6.15578 28.5313 6.24855 28.8822C6.33215 29.1989 6.57253 29.4613 6.95495 29.7158ZM47.6595 2.28129C50.5911 3.61341 51.9051 7.10965 50.5921 10.084C49.2791 13.0582 45.8331 14.3915 42.9016 13.0594C39.97 11.7273 38.656 8.23094 39.969 5.2567C41.2819 2.28247 44.728 0.949175 47.6595 2.28129ZM29.6128 22.6847L32.467 16.2189C32.5893 15.942 32.6183 15.6319 32.5496 15.3365C32.481 15.0411 32.3185 14.7769 32.0872 14.5845L25.9077 9.44588C24.6739 8.42106 24.2224 7.5527 24.7338 6.37612L24.7738 6.284C25.2851 5.10729 26.38 4.22506 27.7996 5.09282C27.7996 5.09282 33.6357 9.41706 35.2208 10.6999C35.4891 10.917 35.7834 11.0989 36.0966 11.2413C37.9974 12.1049 44.9722 15.6273 47.2844 16.678C47.7691 16.8982 48.2131 17.201 48.5971 17.5733L54.9409 23.7222C55.878 24.6518 56.6045 25.6352 56.0796 26.8056L56.0386 26.8974C55.5138 28.0679 54.109 28.964 52.9994 28.0527L46.5339 21.6499C46.4928 21.6091 46.4426 21.579 46.3876 21.5622C46.3326 21.5453 46.2745 21.5422 46.218 21.5531C46.1616 21.564 46.1086 21.5886 46.0635 21.6248C46.0185 21.6609 45.9827 21.7076 45.9593 21.7608L42.2312 30.2062L48.2076 38.5911C48.547 39.0672 48.7179 39.6456 48.6927 40.2326C48.6675 40.8196 48.4477 41.3808 48.0688 41.8252L42.9907 47.7807C42.5849 48.2564 42.0095 48.5491 41.3911 48.5944C40.7726 48.6398 40.1617 48.434 39.6928 48.0225C38.7163 47.1653 38.6095 45.6673 39.4544 44.6766L42.4053 41.2161C42.5024 41.1022 42.5588 40.9584 42.5653 40.808C42.5717 40.6575 42.5279 40.5093 42.4409 40.3873L40.0798 37.0747C36.1988 31.6603 30.8192 29.4879 26.7682 28.0301L21.9333 27.0885C21.7876 27.0601 21.6366 27.0824 21.505 27.152C21.3734 27.2215 21.2688 27.3341 21.2081 27.4715L19.3645 31.6476C18.8367 32.8433 17.4536 33.3783 16.2751 32.8429C15.7092 32.5858 15.2671 32.111 15.0462 31.5232C14.8252 30.9354 14.8434 30.2825 15.0969 29.7084C16.0166 27.6248 17.394 24.5055 18.27 22.5216C18.5067 21.9854 18.915 21.546 19.4287 21.2747C19.9424 21.0034 20.5313 20.916 21.1 21.0268L29.6128 22.6847Z"
            fill="#0044F0" />
        </svg>
      </a>

      <div class="footer__social">
        <a class="footer__social-phone" href="tel:+79398391297">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.48578 1.54458L5.59264 1.21086C5.95794 1.1009 6.35076 1.12758 6.69784 1.28592C7.04492 1.44427 7.32254 1.72347 7.47892 2.07143L8.25492 3.79715C8.38961 4.09653 8.42715 4.43058 8.36227 4.75239C8.2974 5.0742 8.13336 5.36761 7.89321 5.59143L6.71206 6.692C6.55378 6.84229 6.67378 7.428 7.25206 8.43029C7.83092 9.43315 8.27835 9.82972 8.48464 9.768L10.0321 9.29486C10.3457 9.19892 10.6816 9.20353 10.9925 9.30806C11.3034 9.41258 11.5738 9.61178 11.7658 9.87772L12.8686 11.4063C13.0914 11.715 13.1945 12.094 13.1589 12.473C13.1233 12.852 12.9513 13.2051 12.6749 13.4669L11.8223 14.2743C11.5471 14.5349 11.2077 14.7179 10.8387 14.8045C10.4696 14.8912 10.0842 14.8784 9.72178 14.7674C7.93549 14.2206 6.28121 12.5977 4.73664 9.92172C3.18864 7.24172 2.60406 4.98115 3.01149 3.13429C3.09367 2.76215 3.2736 2.41866 3.53275 2.13922C3.79189 1.85978 4.12088 1.65452 4.48578 1.54458Z"
              fill="white" />
          </svg>
          +79398391297
        </a>


        <ul class="footer__social-list">
          <li class="footer_social-item">
            <a class="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7_3542)">
                  <path
                    d="M12.0005 0.479996C5.63807 0.479996 0.480469 5.6376 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.6376 18.3629 0.479996 12.0005 0.479996ZM16.4309 13.4772C16.4309 13.4772 17.4497 14.4828 17.7005 14.9496C17.7077 14.9592 17.7113 14.9688 17.7137 14.9736C17.8157 15.1452 17.8397 15.2784 17.7893 15.378C17.7053 15.5436 17.4173 15.6252 17.3189 15.6324H15.5189C15.3941 15.6324 15.1325 15.6 14.8157 15.3816C14.5721 15.2112 14.3321 14.9316 14.0981 14.6592C13.7489 14.2536 13.4465 13.9032 13.1417 13.9032C13.103 13.9031 13.0645 13.9092 13.0277 13.9212C12.7973 13.9956 12.5021 14.3244 12.5021 15.2004C12.5021 15.474 12.2861 15.6312 12.1337 15.6312H11.3093C11.0285 15.6312 9.56567 15.5328 8.26967 14.166C6.68327 12.492 5.25527 9.1344 5.24327 9.1032C5.15327 8.886 5.33927 8.7696 5.54207 8.7696H7.36007C7.60247 8.7696 7.68167 8.9172 7.73687 9.048C7.80167 9.2004 8.03927 9.8064 8.42927 10.488C9.06167 11.5992 9.44927 12.0504 9.76007 12.0504C9.81835 12.0497 9.87559 12.0349 9.92687 12.0072C10.3325 11.7816 10.2569 10.3356 10.2389 10.0356C10.2389 9.9792 10.2377 9.3888 10.0301 9.1056C9.88127 8.9004 9.62807 8.8224 9.47447 8.7936C9.53664 8.70781 9.61855 8.63825 9.71327 8.5908C9.99167 8.4516 10.4933 8.4312 10.9913 8.4312H11.2685C11.8085 8.4384 11.9477 8.4732 12.1433 8.5224C12.5393 8.6172 12.5477 8.8728 12.5129 9.7476C12.5021 9.996 12.4913 10.2768 12.4913 10.608C12.4913 10.68 12.4877 10.7568 12.4877 10.8384C12.4757 11.2836 12.4613 11.7888 12.7757 11.9964C12.8167 12.0221 12.8641 12.0358 12.9125 12.036C13.0217 12.036 13.3505 12.036 14.2409 10.5084C14.5155 10.0167 14.7541 9.50577 14.9549 8.9796C14.9729 8.9484 15.0257 8.8524 15.0881 8.8152C15.1341 8.79172 15.1852 8.77978 15.2369 8.7804H17.3741C17.6069 8.7804 17.7665 8.8152 17.7965 8.9052C17.8493 9.048 17.7869 9.4836 16.8113 10.8048L16.3757 11.3796C15.4913 12.5388 15.4913 12.5976 16.4309 13.4772Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_7_3542">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li class="footer_social-item">
            <a class="footer__social-link">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                  fill="white" />
              </svg>
            </a>
          </li>
          <li class="footer_social-item">
            <a class="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7_3546)">
                  <path
                    d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.4305 8.859C11.2635 9.345 8.9295 10.35 5.4315 11.874C4.8645 12.099 4.566 12.321 4.539 12.537C4.494 12.9015 4.9515 13.0455 5.574 13.242L5.8365 13.3245C6.4485 13.524 7.2735 13.7565 7.701 13.7655C8.091 13.7745 8.5245 13.6155 9.003 13.2855C12.2715 11.079 13.959 9.9645 14.064 9.9405C14.139 9.9225 14.244 9.9015 14.313 9.9645C14.3835 10.026 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.593 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.6215 17.2065 13.7565 17.304 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.1615C17.573 8.00376 17.5664 7.84529 17.5425 7.689C17.5284 7.56288 17.4673 7.44669 17.3715 7.3635C17.235 7.26928 17.0723 7.22047 16.9065 7.224C16.4565 7.2315 15.762 7.473 12.4305 8.859Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_7_3546">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <ul class="footer__developr-list">
        <li class="footer__developr-item">
          Designer: <a href="mailto:AnastasiaIlina" class="footer__developr-link">AnastasiaIlina</a>
        </li>
        <li class="footer__developr-item">
          Developer: <a href="mailto:Rufina" class="footer__developr-link">Rufina</a>
        </li>
      </ul>

      <p class="footer__copyright">©SKI People, 2025</p>

  `;

  el.append(layout(child, 'footer__container')); //  
  
  return el; // <footer class="footer"> <div class="container footer__container"> ... </div> </footer>
};