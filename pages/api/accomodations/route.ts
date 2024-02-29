import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/utils/db/database";
import { Accomodations } from "@/types";
import Accomodation from "@/models/accomodations";
import User from "@/models/user";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body: Accomodations = req.body;

    try {
      await connectDB();

      const savedAccomodation = await Accomodation.create(body);

      res.status(200).json(savedAccomodation);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      await connectDB();

      const findAllAccomodations = await Accomodation.find().populate({
        path: "userId",
        model: User,
      });

      const response = await axios.get(
        "https://api.avaibook.com/api/owner/accommodations/",
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );
      const findAllAccomodationsByAvaibook = response.data;

      const mergedAccomodations = findAllAccomodations.map((accommodation) => {
        const avaibookAccommodation = findAllAccomodationsByAvaibook.find(
          (avaibookAcc: any) =>
            avaibookAcc.id.toString() === accommodation.accomodationId
        );

        if (avaibookAccommodation) {
          return {
            ...accommodation._doc,
            avaibookName: avaibookAccommodation.name,
          };
        }

        return accommodation;
      });

      return res.status(200).json(mergedAccomodations);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await connectDB();

      const deletedAccomodation = await Accomodation.findByIdAndDelete({
        _id: id,
      });

      if (!deletedAccomodation) {
        return res.status(400).json({ message: "Accomodation not found" });
      }

      res.status(200).json(deletedAccomodation);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "This method is not allowed" });
  }
}
