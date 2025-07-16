var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#5DB890",
    state_hover_color: "#004228",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    NGAB: {
      name: "Abia"
    },
    NGAD: {
      name: "Adamawa",
      description: "Adamawa State is located in northeastern Nigeria. It's known for its diverse culture, scenic landscapes, and the Mandara Mountains. The state shares a border with Cameroon and has agriculture as its main economic activity. Yola is the capital city."
    },
    NGAK: {
      name: "Akwa Ibom"
    },
    NGAN: {
      name: "Anambra"
    },
    NGBA: {
      name: "Bauchi",
      description: "Bauchi State, located in northeastern Nigeria, is known for its rich cultural heritage and natural attractions like the Yankari National Park, which is home to wildlife and warm springs. The state is a hub for agriculture and tourism."
    },
    NGBE: {
      name: "Benue"
    },
    NGBO: {
      name: "Borno"
    },
    NGBY: {
      name: "Bayelsa"
    },
    NGCR: {
      name: "Cross River"
    },
    NGDE: {
      name: "Delta"
    },
    NGEB: {
      name: "Ebonyi"
    },
    NGED: {
      name: "Edo"
    },
    NGEK: {
      name: "Ekiti"
    },
    NGEN: {
      name: "Enugu"
    },
    NGFC: {
      name: "Federal Capital Territory",
      description: "Federal Capital Territory(Abuja )is the capital city of Nigeria, located in the center of the country. It is known for its modern architecture, including the National Mosque and Aso Rock. As the seat of government, it hosts major administrative and political institutions."
    },
    NGGO: {
      name: "Gombe"
    },
    NGIM: {
      name: "Imo"
    },
    NGJI: {
      name: "Jigawa"
    },
    NGKD: {
      name: "Kaduna"
    },
    NGKE: {
      name: "Kebbi"
    },
    NGKN: {
      name: "Kano"
    },
    NGKO: {
      name: "Kogi",
      description: "Kogi State, situated in central Nigeria, is known as the \"Confluence State\" because the Rivers Niger and Benue meet there. It has a diverse culture and serves as a gateway between northern and southern Nigeria."
    },
    NGKT: {
      name: "Katsina"
    },
    NGKW: {
      name: "Kwara"
    },
    NGLA: {
      name: "Lagos"
    },
    NGNA: {
      name: "Nassarawa"
    },
    NGNI: {
      name: "Niger"
    },
    NGOG: {
      name: "Ogun"
    },
    NGON: {
      name: "Ondo"
    },
    NGOS: {
      name: "Osun"
    },
    NGOY: {
      name: "Oyo"
    },
    NGPL: {
      name: "Plateau"
    },
    NGRI: {
      name: "Rivers"
    },
    NGSO: {
      name: "Sokoto"
    },
    NGTA: {
      name: "Taraba"
    },
    NGYO: {
      name: "Yobe"
    },
    NGZA: {
      name: "Zamfara"
    }
  },
  locations: {
    "0": {
      name: "Abuja",
      lat: "9.083333",
      lng: "7.533333"
    }
  },
  labels: {
    NGAB: {
      name: "Abia",
      parent_id: "NGAB"
    },
    NGAD: {
      name: "Adamawa",
      parent_id: "NGAD"
    },
    NGAK: {
      name: "Akwa Ibom",
      parent_id: "NGAK"
    },
    NGAN: {
      name: "Anambra",
      parent_id: "NGAN"
    },
    NGBA: {
      name: "Bauchi",
      parent_id: "NGBA"
    },
    NGBE: {
      name: "Benue",
      parent_id: "NGBE"
    },
    NGBO: {
      name: "Borno",
      parent_id: "NGBO"
    },
    NGBY: {
      name: "Bayelsa",
      parent_id: "NGBY"
    },
    NGCR: {
      name: "Cross River",
      parent_id: "NGCR"
    },
    NGDE: {
      name: "Delta",
      parent_id: "NGDE"
    },
    NGEB: {
      name: "Ebonyi",
      parent_id: "NGEB"
    },
    NGED: {
      name: "Edo",
      parent_id: "NGED"
    },
    NGEK: {
      name: "Ekiti",
      parent_id: "NGEK"
    },
    NGEN: {
      name: "Enugu",
      parent_id: "NGEN"
    },
    NGFC: {
      name: "Federal Capital Territory",
      parent_id: "NGFC"
    },
    NGGO: {
      name: "Gombe",
      parent_id: "NGGO"
    },
    NGIM: {
      name: "Imo",
      parent_id: "NGIM"
    },
    NGJI: {
      name: "Jigawa",
      parent_id: "NGJI"
    },
    NGKD: {
      name: "Kaduna",
      parent_id: "NGKD"
    },
    NGKE: {
      name: "Kebbi",
      parent_id: "NGKE"
    },
    NGKN: {
      name: "Kano",
      parent_id: "NGKN"
    },
    NGKO: {
      name: "Kogi",
      parent_id: "NGKO"
    },
    NGKT: {
      name: "Katsina",
      parent_id: "NGKT"
    },
    NGKW: {
      name: "Kwara",
      parent_id: "NGKW"
    },
    NGLA: {
      name: "Lagos",
      parent_id: "NGLA"
    },
    NGNA: {
      name: "Nassarawa",
      parent_id: "NGNA"
    },
    NGNI: {
      name: "Niger",
      parent_id: "NGNI"
    },
    NGOG: {
      name: "Ogun",
      parent_id: "NGOG"
    },
    NGON: {
      name: "Ondo",
      parent_id: "NGON"
    },
    NGOS: {
      name: "Osun",
      parent_id: "NGOS"
    },
    NGOY: {
      name: "Oyo",
      parent_id: "NGOY"
    },
    NGPL: {
      name: "Plateau",
      parent_id: "NGPL"
    },
    NGRI: {
      name: "Rivers",
      parent_id: "NGRI"
    },
    NGSO: {
      name: "Sokoto",
      parent_id: "NGSO"
    },
    NGTA: {
      name: "Taraba",
      parent_id: "NGTA"
    },
    NGYO: {
      name: "Yobe",
      parent_id: "NGYO"
    },
    NGZA: {
      name: "Zamfara",
      parent_id: "NGZA"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "Kebbi",
        "Kaduna",
        "Kano",
        "Katsina",
        "Sokoto",
        "Zamfara",
        "Jigawa"
      ],
      name: "North-West",
      color: "#0021ff",
      description: "Northwestern zone"
    }
  }
};