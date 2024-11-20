import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

import controller from '../controller/RotationItem';
import express from 'express';

const router = express.Router();

router.post(
    '/create',
    // ValidateSchema(Schemas.rotationItem.create),
    controller.createRotationItem
);
router.get('/get/:rotationItemId', controller.readRotationItem);
router.get(
    '/get/:rotationItemId/peopleCount',
    controller.getRotationItemIdPeopleCount
);
// router.get('/get/:rotationItemId/events', controller.getRotationItemIdRecentEvents);
router.get(
    '/get/:rotationItemId/events',
    controller.getRotationItemIdRecentEvents
);
router.post('/get/:rotationItemId/randomize/:roleId', controller.randomizePeople);

router.get('/get/', controller.readAllRotationItems);
router.patch(
    '/update/:rotationItemId',
    // ValidateSchema(Schemas.rotationItem.update),
    controller.updateRotationItem
);
router.delete('/delete/:rotationItemId', controller.deleteRotationItem);

export default router;
