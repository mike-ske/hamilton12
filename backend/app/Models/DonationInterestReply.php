<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class DonationInterestReply extends Model
{
    protected $guarded=[];
    protected $casts=['sent_at'=>'datetime'];
    public function donationInterest(){return $this->belongsTo(DonationInterest::class);}
    public function user(){return $this->belongsTo(User::class);}
}
