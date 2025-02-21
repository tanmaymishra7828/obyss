function locomotiveApply()
{
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveApply();

function loadingFunction()
{
  var tl=gsap.timeline()
  tl.from(".line h1,.line h2",
    {
      y:150,
      opacity:0,
      stagger:0.25,
      duration:0.6,
      delay:0.5
    }
  )
  tl.from("#line1-part1",{
     opacity:0,
     onStart:function(){
      var h5= document.querySelector("#line1-part1 h5")
      var grow=0;
      setInterval(function(){
         if(grow==100)
          {grow=100}
         else
       { grow++;}
        h5.textContent=grow;
      },25)
     }
  })
  
  tl.to("#loader",
  {  
     opacity:0,
     duration:0.4,
     delay:0.5  // change it to 3
  })
  
  tl.from("#page1",{
    y:1600,
    opacity:0,
    duration:2,
    ease:"power3"
  })
  
  tl.to("#loader",
  { 
    opacity:0,
    display:"none"
  })

  tl.from(".hero h1,#hero3 h1",{
    y:50,
    opacity:0,
    stagger:0.2,
    duration:0.3
   })
}
loadingFunction();

    
 function flag_move(){

  var f=document.querySelector("#flag")
  var hero3=document.querySelector("#hero3")
 
  
  
  hero3.addEventListener("mousemove",function(dets){
   
      gsap.to(f,{
        x:dets.x,
        y:dets.y,
      })
  })

  hero3.addEventListener("mouseenter",function(){
    gsap.to(f,{
      opacity:1
    })
  })
  hero3.addEventListener("mouseleave",function(){
    gsap.to(f,{
      opacity:0
    })
  })


}
 flag_move();


    var video_container=document.querySelector("#video-container")
    var play_button=document.querySelector(".play_button")
    // var bounds= video_container.getBoundingClientRect();
    var video=document.querySelector("#video-container video")
    var flag=0
    video_container.addEventListener("mouseenter",function(){
       
      video_container.addEventListener("click",function(){
       
        if(flag==0)
       { 
        video.play()
        video.style.opacity=1
        play_button.innerHTML=`<i class="ri-pause-mini-line"></i>`
        gsap.to(play_button,{
          scale:0.7
        })
        flag=1
      }

      else
      {
        video.pause()
        video.style.opacity=0
        play_button.innerHTML=`<i class="ri-play-fill"></i>`
        gsap.to(play_button,{
          scale:1
        })
        flag=0
      }

      })
      video_container.addEventListener("mousemove",function(dets){
        
        gsap.to(".mousefollower",{
          opacity:0
         })
        gsap.to(play_button,{
            left:dets.x-400,
            y:dets.y-190,
           
          })

      });
    });
    video_container.addEventListener("mouseleave",function(dets){
        
      gsap.to(".mousefollower",{
        opacity:1
       })
      gsap.to(play_button,{
          left:"75%",
          top:"-8%",
        })


    });



function mouseAnimation(){

Shery.mouseFollower({
  skew:true,
  ease:"cubic-bezeir(0.23,1,0.320,1)",
  duration:1
});

Shery.makeMagnet("#nav-part2 h4");

}
mouseAnimation();

function heroClassAnimation(){
   var tl=gsap.timeline()

   gsap.from(".hero h1",{
    y:150,
    opacity:0,
    stagger:0.8,duration:0.6
   })
}
heroClassAnimation();


gsap.from("#page4 h2",{
  y:100,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page4",
    // markers:"true",
    scroller:"#main",
    start:"top 60%",
    end:"top 20%",
    scrub:1
  }
})
gsap.from("#page4 p",{
  y:100,
  duration:0.5,
  scrollTrigger:{
    trigger:".txt-content2",
    // markers:"true",
    scroller:"#main",
    start:"top 70%",
    end:"top 30%",
    scrub:1
  }
})
gsap.from(".underline1",{
  x:700,
  opacity:0,
    scrollTrigger:
    {
      trigger:"#page6 h1",
    // markers:"true",
    scroller:"#main",
    start:"top 75%",
    end:"top 50%"
    
    }
})

function sheryAnimation()
{
  Shery.imageEffect(".block1 ,.block2 ,.block3_img,.block4_img,.block5 ,.block6 ", {
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7852761211595723},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
  });
}
sheryAnimation();


gsap.from(".underline3,.underline4",{
  x:500,
  duration:1.5,
  scrollTrigger:
  {
    trigger:".container_for_underline4",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".page3_underline",{
  x:1000,
  duration:1,
  scrollTrigger:
  {
    trigger:".container_for_page3_heading_underline",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".underline_1,.underline_2",{
  x:500,
  duration:1.5,
  scrollTrigger:
  {
    trigger:".container_for_underline1",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".underline6",{
  x:500,
  duration:1.5,
  scrollTrigger:
  {
    trigger:".container_for_underline6",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".underline5",{
  x:500,
  duration:1.5,
  scrollTrigger:
  {
    trigger:".container_for_underline5",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".page4_underline",{
  x:1000,
  duration:1,
  scrollTrigger:
  {
    trigger:".container_for_page4_heading_underline",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".page4_endingline",{
  x:1000,
  duration:1,
  scrollTrigger:
  {
    trigger:".container_for_page4_ending_underline",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
gsap.from(".page6_underline",{
  x:1000,
  duration:1,
  scrollTrigger:
  {
    trigger:".container_for_page6_heading_underline",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }

})
 
gsap.from(".ico",{
  opacity:0,
  duration:1.5,
  y:100,
  scrollTrigger:
  {
    trigger:".ico",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }
})
gsap.from(".ico_2",{
  opacity:0,
  duration:1.5,
  y:100,
  scrollTrigger:
  {
    trigger:".ico_2",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }
})
gsap.from(".ico_3",{
  opacity:0,
  duration:1.5,
  y:100,
  scrollTrigger:
  {
    trigger:".ico_3",
    scroller:"#main",
    start:"top 95%",
    end:"top 70%"
  }
})


var footer=document.querySelector("#footer")
footer.addEventListener("mouseenter",function(){
  gsap.to(footer,{
    onStart:function(){ 
      $(footer).textillate({in: { effect: 'fadeIn' }}) 
      footer.style.fontStyle="italic"
    },
    onComplete:function(){ 
      $(footer).textillate({out: { effect: 'fadeOut' }}) 
      footer.style.fontStyle="none"
    }
   
  })
})

