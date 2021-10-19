import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Lightbox} from 'ngx-lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-index-apps',
  templateUrl: './index-apps.component.html',
  styleUrls: ['./index-apps.component.css']
})

/***
 * Apps Component
 */

export class IndexAppsComponent implements OnInit {

  public myOptions: NgxMasonryOptions = {
    horizontalOrder: true
  };

  /**
   * Portfolio Masonry Two Data
   */
  filterredImages;
  galleryFilter = 'all';

  private _album = [];

  list = [{
    image: 'assets/images/work/13.jpg',
    title: 'Iphone mockup',
    text: 'Branding',
    category: 'branding'
  },
    {
      image: 'assets/images/work/21.jpg',
      title: 'Mockup Collection',
      text: 'Mockup',
      category: 'designing'
    },
    {
      image: 'assets/images/work/14.jpg',
      title: 'Abstract images',
      text: 'Abstract',
      category: 'photography'
    },
    {
      image: 'assets/images/work/22.jpg',
      title: 'Yellow bg with Books',
      text: 'Books',
      category: 'development'
    },
    {
      image: 'assets/images/work/16.jpg',
      title: 'Company V-card',
      text: 'V-card',
      category: 'branding'
    },
    {
      image: 'assets/images/work/15.jpg',
      title: 'Coffee cup',
      text: 'Cups',
      category: 'designing'
    },
    {
      image: 'assets/images/work/23.jpg',
      title: 'Mockup box with paints',
      text: 'Photography',
      category: 'branding'
    },
    {
      image: 'assets/images/work/17.jpg',
      title: 'Pen and article',
      text: 'Article',
      category: 'development'
    },
    {
      image: 'assets/images/work/24.jpg',
      title: 'White mockup box',
      text: 'Color',
      category: 'photography'
    },
    {
      image: 'assets/images/work/18.jpg',
      title: 'Logo Vectors',
      text: 'Logos',
      category: 'photography'
    }
  ];

  constructor(private modalService: NgbModal, private _lightbox: Lightbox) {
    for (let i = 13; i <= 24; i++) {
      const src = '../../../assets/images/work/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/work/' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._album.push(item);
    }
  }

  /***
   * Client Review Owl Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  /**
   * Simple Pricing Data
   */
    // tslint:disable-next-line:variable-name
  simple_pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments", "Free Installment", "Enhanced Security"],
      btn: "Get Started"
    },
    {
      title: 'Professional',
      price: 59,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Try It Now"
    }
  ];

  memberData = [
    {
      profile: "assets/images/client/backman.jpg",
      list: ["linkedin"],
      link: "https://se.linkedin.com/in/pontus-backman-b86ab5158",
      name: "Pontus Backman",
      designation: "Software Developer"
    },
    {
      profile: "assets/images/client/math.jpg",
      list: ["linkedin"],
      link: "https://fr.linkedin.com/in/hugo-math-b12250175",
      name: "Hugo Math",
      designation: "AI Developer"
    },
    {
      profile: "assets/images/client/haudot.jpg",
      list: ["linkedin"],
      link: "https://fr.linkedin.com/in/nathanhaudot",
      name: "Nathan Haudot",
      designation: "Designer & Developer"
    }
  ];

  ngOnInit(): void {
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  onstructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  /**
   * Open modal for show the video
   */
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.filterredImages = this.list;
    } else {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
