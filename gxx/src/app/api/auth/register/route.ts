import {connect} from '@/database/mongo.config'
import { NextRequest, NextResponse } from 'next/server';

// * For DB Connection
connect();

export async function POST(request:NextRequest)