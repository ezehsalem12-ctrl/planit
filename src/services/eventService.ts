import api from "./api";
import type { EventsResponse } from "../types/event";

interface GetEventsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export const getEvents = async (
  params: GetEventsParams = {},
): Promise<EventsResponse> => {
  const response = await api.get<EventsResponse>("/events", {
    params,
  });

  return response.data;
};
