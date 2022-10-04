import mongoose, { Document, Schema } from 'mongoose';

export interface IRotationEvent {
    item: string;
    startDate: Date;
    endDate: Date | null;
}

export interface IRotationEventModel extends IRotationEvent, Document {}

const RotationEventSchema: Schema = new Schema(
    {
        item: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'rotation-item',
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: { type: Date || null },
            required: false,
        },
        people: [{ type: Schema.Types.ObjectId, ref: 'person' }],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IRotationEventModel>(
    'rotation-event',
    RotationEventSchema
);
