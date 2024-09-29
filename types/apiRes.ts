interface Affiliation {
  code: string;
  color: string;
  id: number;
  membership_id: number;
  name: string;
}

interface Subtype {
  id: number;
  name: string;
  type: string;
}

interface ShaderData {
  [key: string]: any;
}

interface Texture {
  images: {
    post: string;
    product_thumb_large: string;
    subscribers_vault_thumbnail: string;
  };
  slug: string;
  source: string;
}

interface Model {
  images: any[];
  slug: string;
  source: string;
}

interface CelestialObject {
  affiliation: Affiliation[];
  age: number | null;
  appearance: string;
  axial_tilt: number | null;
  code: string;
  description: string | null;
  designation: string;
  distance: number;
  fairchanceact: boolean | null;
  habitable: boolean | null;
  id: number;
  info_url: string | null;
  latitude: number;
  longitude: number;
  name: string | null;
  orbit_period: number | null;
  parent_id: number | null;
  population: any[];
  sensor_danger: string;
  sensor_economy: string;
  sensor_population: string;
  shader_data: ShaderData | null;
  show_label: boolean | null;
  show_orbitlines: boolean | null;
  size: number | null;
  subtype: Subtype;
  subtype_id: number;
  time_modified: string;
  type: string;
  texture?: Texture;
  model?: Model;
}

interface Data {
  affiliation: Affiliation[];
  aggregated_danger: number;
  aggregated_economy: number;
  aggregated_population: number;
  aggregated_size: string;
  celestial_objects: CelestialObject[];
  code: string;
  description: string;
  frost_line: number;
  habitable_zone_inner: number;
  habitable_zone_outer: number;
  id: number;
  info_url: string | null;
  name: string;
  position_x: number;
  position_y: number;
  position_z: number;
  shader_data: ShaderData;
  status: string;
  thumbnail: Texture;
  time_modified: string;
  type: string;
}

interface Response {
  data: Data;
  message: string;
  source: string;
  success: number;
}