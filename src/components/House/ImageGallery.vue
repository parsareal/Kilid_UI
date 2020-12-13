<template>
  <div class="images-container flex-col">
      <div class="main-image-container flex-row">
          <button class="arrow-button" style="right: 0;" v-on:click="doSlide('right')"><svg _ngcontent-c22="" class="ng-tns-c22-29" height="32" viewBox="0 0 18.241 32" width="18.241" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-c22="" class="ng-tns-c22-29" d="M17.585,17.584,3.825,31.343A2.241,2.241,0,0,1,.656,28.174L12.831,16,.657,3.826A2.241,2.241,0,0,1,3.826.656l13.76,13.759a2.241,2.241,0,0,1,0,3.168Z" data-name="Path 5487" fill="rgba(255,255,255,0.7)" id="Path_5487"></path></svg></button>
          <img :src="pics[presentingList[0]]" alt="" class="main-image">
          <button class="arrow-button" style="left: 0;" v-on:click="doSlide('left')"><svg _ngcontent-c22="" class="ng-tns-c22-29" height="32" viewBox="0 0 18.241 32" width="18.241" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-c22="" class="ng-tns-c22-29" d="M.656,17.584,14.416,31.343a2.241,2.241,0,0,0,3.169-3.169L5.41,16,17.585,3.826A2.241,2.241,0,1,0,14.415.656L.656,14.416a2.241,2.241,0,0,0,0,3.168Z" data-name="Path 5488" fill="rgba(255,255,255,0.7)" id="Path_5488"></path></svg></button>
      </div>
      <div class="images-toolbar flex-row">
          <div class="reserved-image" v-bind:style="{ 'background-image': 'url( ' + pics[presentingList[1]] + ')' }"></div>
          <div class="reserved-image" v-bind:style="{ 'background-image': 'url( ' + pics[presentingList[2]] + ')' }"></div>
          <div class="reserved-image" v-bind:style="{ 'background-image': 'url( ' + pics[presentingList[3]] + ')' }"></div>
          <div class="reserved-image" v-bind:style="{ 'background-image': 'url( ' + pics[presentingList[4]] + ')' }"></div>
          <div class="threedot-icon flex-col">
              <svg _ngcontent-c22="" style="margin-bottom: 4px;" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-c22="" class="ng-tns-c22-7" cx="6" cy="6" data-name="Ellipse 162" fill="#aaa" id="Ellipse_162" r="6"></circle></svg>
              <svg _ngcontent-c22="" style="margin-bottom: 4px;" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-c22="" class="ng-tns-c22-7" cx="6" cy="6" data-name="Ellipse 162" fill="#aaa" id="Ellipse_162" r="6"></circle></svg>
              <svg _ngcontent-c22="" style="margin-bottom: 4px;" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-c22="" class="ng-tns-c22-7" cx="6" cy="6" data-name="Ellipse 162" fill="#aaa" id="Ellipse_162" r="6"></circle></svg>
          </div>
          
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ImageGallery',
  props: ["pics"],
  data() {
      return {
          presentingList: [],
      }
  },
  methods:{
      doSlide(direction) {
          console.log(this.pics[0]);
          console.log(this.presentingList);
          
          if (this.presentingList.length < 2) {
              return
          }
          if (direction == 'right') {
              this.presentingList.pop();
              let firstIndex = this.presentingList[0] - 1 ;
              if (firstIndex < 0) {
                  firstIndex = this.pics.length - 1;
              }
              this.presentingList.unshift(firstIndex);
          }
          if (direction == 'left') {
              this.presentingList.shift();
              let lastIndex = this.presentingList[this.presentingList.length - 1] + 1;
              if (lastIndex > this.pics.length - 1) {
                  lastIndex = 0
              }
              this.presentingList.push(lastIndex)
          }
      }
  },
//   created() {
//     //   console.log('cdsafad');
      
//     //   console.log(this.pics.length);
//       for (let i = 0; i < this.pics.length; i++) {
//           if (i == 5) {
//               break;
//           } else {
//               this.presentingList.push(i)
//           }
//       }
//   },
  watch: {
        async pics() {
            for (let index = 0; index < this.pics.length; index++) {
                const element = this.pics[index];
                this.pics[index] = 'http://localhost:3000/'.concat(element)
            }

            for (let i = 0; i < this.pics.length; i++) {
                if (i == 5) {
                    break;
                } else {
                    this.presentingList.push(i)
                }
            }
            // let newPics = []
            // this.pics.forEach(element => {
            //     console.log(element);
            //     newPics.push('http://localhost:3000/'.concat(element))
            // });
            // console.log(newPics);
            // this.pics = newPics;
        },
    }
}
</script>

<style scoped>

    .images-container {
        color: #373435;
        margin-bottom: 24px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .main-image-container {
        position: relative;
        border-radius: 15px 15px 0 0;
        overflow: hidden;
        height: 423px;
    }

    .arrow-button {
        position: absolute;
        align-self: center;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 16px;
        z-index: 2;
        align-items: center;
        justify-content: center;
    }
    
    .main-image {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        /* -o-object-fit: cover; */
        /* object-fit: cover; */
    }

    .images-toolbar {
        border-radius: 0 0 15px 15px;
        overflow: hidden;
        flex-direction: row-reverse;
        padding-top: 4px;
        background-color: #f9f7f8;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }

    .reserved-image {
        width: 25%;
        padding-top: 16.2%;
        margin-right: 4px;
        border-radius: 2px;
        background-position: center;
        background-size: cover;
    }

    .threedot-icon {
        width: 36px;
        align-items: center;
        justify-content: center;
    }

</style>

