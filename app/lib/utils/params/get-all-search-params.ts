import { ReadonlyURLSearchParams } from "next/navigation";

// minPrice=24848477&maxPrice=100000000&category=675679cb1664bf46cbef2cd2 : ReadonlyURLSearchParams

export const getAllSearchParams = (
  searchParams: ReadonlyURLSearchParams
): Record<string, string> => {
  const params: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
