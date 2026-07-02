"use server";

import { APIS } from "../apiFactory/apiFactory";

// Blog Banner
export const getBlogBanner = async () => {
  try {
    const res = await fetch(APIS.GET_BLOG_BANNER, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

// Blog Categories
export const getBlogCategories = async () => {
  try {
    const res = await fetch(APIS.GET_BLOG_CATEGORIES, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

// Blogs by Category
export const getBlogsByCategory = async ({
  category,
  page = 1,
  keyword = "",
}: {
  category: string;
  page?: number;
  keyword?: string;
}) => {
  try {
    const url = `${APIS.GET_BLOGS_BY_CATEGORY}${category}?page=${page}${keyword ? `&keyword=${encodeURIComponent(keyword)}` : ""}`;
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

// Blog Cover
export const getBlogCover = async ({
  page = 1,
  keyword = "",
}: {
  page?: number;
  keyword?: string;
}) => {
  try {
    const url = `${APIS.GET_BLOG_COVER}?page=${page}${keyword ? `&keyword=${encodeURIComponent(keyword)}` : ""}`;
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

// Blog Details
export const getBlogDetails = async ({ slug }: { slug: string }) => {
  try {
    const res = await fetch(`${APIS.GET_BLOG_DETAILS}${slug}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
